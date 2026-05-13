from fastapi import APIRouter, status

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
async def login(payload: LoginRequest) -> LoginResponse:
    return LoginResponse(
        user_id="placeholder-user-id",
        nickname="placeholder-nickname",
        session_active=True,
    )


@router.post(
    "/refresh",
    response_model=SessionRefreshResponse,
    summary="세션 상태 확인 및 갱신",
)
async def refresh_session() -> SessionRefreshResponse:
    return SessionRefreshResponse(
        session_active=True,
        expires_at="2026-05-13T00:00:00Z",
    )
