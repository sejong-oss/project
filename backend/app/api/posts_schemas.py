from typing import Literal

from pydantic import BaseModel, ConfigDict, Field


class PostsBaseModel(BaseModel):
    model_config = ConfigDict(populate_by_name=True)


class PostAuthor(PostsBaseModel):
    user_id: str = Field(..., alias="userId", description="작성자 ID")
    nickname: str = Field(..., description="작성자 닉네임")
    avatar_url: str | None = Field(
        None, alias="avatarUrl", description="작성자 프로필 이미지 URL"
    )


class PostListItem(PostsBaseModel):
    post_id: str = Field(..., alias="postId", description="공유 게시글 ID")
    title: str = Field(..., description="공유 게시글 제목")
    thumbnail_url: str | None = Field(
        None, alias="thumbnailUrl", description="썸네일 URL"
    )
    cook_time: int = Field(..., alias="cookTime", description="조리 시간(분)")
    category: str = Field(..., description="카테고리")
    difficulty: Literal["easy", "medium", "hard"] = Field(..., description="난이도")
    like_count: int = Field(..., alias="likeCount", description="좋아요 수")
    bookmark_count: int = Field(..., alias="bookmarkCount", description="북마크 수")
    author: PostAuthor = Field(..., description="작성자 정보")
    tags: list[str] = Field(..., description="태그 목록")


class PostsListResponse(PostsBaseModel):
    total: int = Field(..., description="전체 결과 수")
    page: int = Field(..., description="현재 페이지")
    posts: list[PostListItem] = Field(..., description="공유 피드 목록")


class PostIngredient(PostsBaseModel):
    name: str = Field(..., description="재료 이름")
    amount: str | None = Field(None, description="재료 분량")


class PostStep(PostsBaseModel):
    step: int = Field(..., ge=1, description="조리 단계")
    description: str = Field(..., description="조리 설명")


class PostDetailResponse(PostListItem):
    description: str = Field(..., description="공유 레시피 설명")
    servings: int = Field(..., ge=1, description="인분")
    comment_count: int = Field(..., alias="commentCount", description="댓글 수")
    is_liked: bool = Field(..., alias="isLiked", description="현재 사용자 좋아요 여부")
    is_bookmarked: bool = Field(..., alias="isBookmarked", description="현재 사용자 북마크 여부")
    source_recipe_id: str | None = Field(
        None, alias="sourceRecipeId", description="원본 레시피 ID"
    )
    ingredients: list[PostIngredient] = Field(..., description="재료 목록")
    steps: list[PostStep] = Field(..., description="조리 단계 목록")
