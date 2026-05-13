from fastapi import APIRouter, Request, status

from app.api.auth_schemas import (
    LoginRequest,
    LoginResponse,
    SessionRefreshResponse,
    SignupRequest,
    SignupResponse,
)

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post(
    "/signup",
    response_model=SignupResponse,
    status_code=status.HTTP_201_CREATED,
    summary="회원가입",
)
async def signup(payload: SignupRequest) -> SignupResponse:
    return SignupResponse(user_id="placeholder-user-id", nickname=payload.nickname)


@router.post(
    "/login",
    response_model=LoginResponse,
    summary="로그인 및 세션 생성",
)
async def login(payload: LoginRequest, request: Request) -> LoginResponse:
    user_id = "placeholder-user-id"
    nickname = "placeholder-nickname"
    request.session["user_id"] = user_id
    request.session["nickname"] = nickname

    return LoginResponse(
        user_id=user_id,
        nickname=nickname,
        session_active=True,
    )


@router.post(
    "/refresh",
    response_model=SessionRefreshResponse,
    summary="세션 상태 확인 및 갱신",
)
async def refresh_session(request: Request) -> SessionRefreshResponse:
    session_active = "user_id" in request.session

    return SessionRefreshResponse(
        session_active=session_active,
        expires_at="2026-05-13T00:00:00Z" if session_active else None,
    )
