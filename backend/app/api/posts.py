from typing import Literal

from fastapi import APIRouter, HTTPException, Query

from app.api.posts_schemas import PostDetailResponse, PostListItem, PostsListResponse

router = APIRouter(prefix="/posts", tags=["posts"])

_POST_SEEDS = [
    {
        "postId": "post-doenjang-jjigae",
        "title": "된장찌개 황금레시피",
        "description": "냉장고에 있는 두부와 애호박으로 간단하게 끓이는 구수한 된장찌개입니다.",
        "thumbnailUrl": "https://example.com/images/doenjang-jjigae.jpg",
        "cookTime": 20,
        "category": "한식",
        "difficulty": "easy",
        "servings": 2,
        "likeCount": 312,
        "bookmarkCount": 89,
        "commentCount": 12,
        "isLiked": False,
        "isBookmarked": False,
        "sourceRecipeId": "recipe-doenjang-jjigae",
        "author": {
            "userId": "user-moka",
            "nickname": "집밥하는모카",
            "avatarUrl": "https://example.com/avatars/moka.png",
        },
        "tags": ["#한식", "#된장", "#찌개"],
        "ingredients": [
            {"name": "두부", "amount": "1/2모"},
            {"name": "애호박", "amount": "1/3개"},
            {"name": "된장", "amount": "1큰술"},
        ],
        "steps": [
            {"step": 1, "description": "냄비에 물을 붓고 된장을 풀어 끓입니다."},
            {"step": 2, "description": "두부와 애호박을 넣고 10분 정도 더 끓입니다."},
        ],
    },
    {
        "postId": "post-tofu-jorim",
        "title": "두부 간장조림 저만의 ver.",
        "description": "양파를 넉넉히 넣어 달큰하게 졸인 두부 간장조림입니다.",
        "thumbnailUrl": "https://example.com/images/tofu-jorim.jpg",
        "cookTime": 25,
        "category": "한식",
        "difficulty": "easy",
        "servings": 2,
        "likeCount": 247,
        "bookmarkCount": 75,
        "commentCount": 9,
        "isLiked": False,
        "isBookmarked": False,
        "sourceRecipeId": "recipe-tofu-jorim",
        "author": {
            "userId": "user-dubu",
            "nickname": "두부좋아",
            "avatarUrl": "https://example.com/avatars/dubu.png",
        },
        "tags": ["#한식", "#두부", "#반찬"],
        "ingredients": [
            {"name": "두부", "amount": "1모"},
            {"name": "양파", "amount": "1/2개"},
            {"name": "간장", "amount": "2큰술"},
        ],
        "steps": [
            {"step": 1, "description": "두부를 도톰하게 썰어 노릇하게 굽습니다."},
            {"step": 2, "description": "양념장과 양파를 넣고 약불에서 졸입니다."},
        ],
    },
    {
        "postId": "post-tomato-pasta",
        "title": "토마토 파스타 쉽게 만들기",
        "description": "토마토와 마늘만으로 빠르게 만드는 기본 파스타입니다.",
        "thumbnailUrl": "https://example.com/images/tomato-pasta.jpg",
        "cookTime": 30,
        "category": "양식",
        "difficulty": "medium",
        "servings": 1,
        "likeCount": 108,
        "bookmarkCount": 46,
        "commentCount": 5,
        "isLiked": False,
        "isBookmarked": False,
        "sourceRecipeId": None,
        "author": {
            "userId": "user-pasta",
            "nickname": "파스타연구소",
            "avatarUrl": "https://example.com/avatars/pasta.png",
        },
        "tags": ["#양식", "#파스타", "#토마토"],
        "ingredients": [
            {"name": "파스타면", "amount": "100g"},
            {"name": "토마토", "amount": "2개"},
            {"name": "마늘", "amount": "2쪽"},
        ],
        "steps": [
            {"step": 1, "description": "파스타면을 끓는 물에 삶습니다."},
            {"step": 2, "description": "마늘과 토마토를 볶아 소스를 만듭니다."},
        ],
    },
]


@router.get("", response_model=PostsListResponse, summary="공유 피드 목록 조회")
async def list_posts(
    page: int = Query(1, ge=1, description="페이지 번호"),
    limit: int = Query(20, ge=1, le=50, description="페이지당 결과 수"),
    sort: Literal["popular", "recent"] = Query("recent", description="정렬 기준"),
    category: str | None = Query(None, description="카테고리"),
    max_cook_time: int | None = Query(
        None, alias="maxCookTime", ge=1, description="최대 조리 시간"
    ),
    difficulty: Literal["easy", "medium", "hard"] | None = Query(
        None, description="난이도"
    ),
    q: str | None = Query(None, description="검색어"),
    my_ingredients: bool = Query(
        False, alias="myIngredients", description="내 재료 우선 정렬 여부"
    ),
) -> PostsListResponse:
    posts = list(_POST_SEEDS)

    if category:
        posts = [post for post in posts if post["category"] == category]
    if max_cook_time is not None:
        posts = [post for post in posts if post["cookTime"] <= max_cook_time]
    if difficulty:
        posts = [post for post in posts if post["difficulty"] == difficulty]
    if q and q.strip():
        normalized_query = q.strip().casefold()
        posts = [post for post in posts if _matches_post_query(post, normalized_query)]

    if sort == "popular":
        posts.sort(key=lambda post: post["likeCount"], reverse=True)
    else:
        posts.sort(key=lambda post: post["postId"], reverse=True)

    total = len(posts)
    start = (page - 1) * limit
    end = start + limit
    paged_posts = posts[start:end]

    return PostsListResponse(
        total=total,
        page=page,
        posts=[PostListItem.model_validate(post) for post in paged_posts],
    )


@router.get("/{postId}", response_model=PostDetailResponse, summary="공유 피드 상세 조회")
async def get_post(postId: str) -> PostDetailResponse:
    for post in _POST_SEEDS:
        if post["postId"] == postId:
            return PostDetailResponse.model_validate(post)
    raise HTTPException(status_code=404, detail="Post not found")


def _matches_post_query(post: dict, normalized_query: str) -> bool:
    searchable_values = [
        post["title"],
        post["category"],
        post["author"]["nickname"],
        *post["tags"],
        *(ingredient["name"] for ingredient in post["ingredients"]),
    ]
    return any(normalized_query in value.casefold() for value in searchable_values)
