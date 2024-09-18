# ChatApp - Portfolio Project

## 프로젝트 소개

ChatApp은 Electron.js와 React로 구현한 실시간 채팅 애플리케이션. 다수의 사용자가 실시간 채팅을 할 수 있도록 WebSocket을 사용했으며, 데스크탑 애플리케이션 형태로 배포될 예정.

## 설치 및 실행 방법

Electron 설치 파일 실행 후 자동으로 백엔드와 프론트엔드 서버가 연동되도록 설정할 예정. 아직 배포는 구현 전 상태.

## 기술 스택

- **Frontend**: React, Vite, Tailwind CSS, React Query, TypeScript
- **Backend**: Node.js, Electron.js, WebSocket
- **Database**: 결정 중

## 프로젝트 구조

```bash
chatapp-backend/
├── main.js           # Electron 메인 프로세스
├── preload.js        # Electron preload 스크립트
├── server.js         # Express 서버
├── package.json      # 프로젝트 설정 파일
└── chatapp-front/    # 프론트엔드 (React + Vite)
```

## 주요 기능

1. **로그인**: 사용자는 계정을 통해 로그인할 수 있다.
2. **방 생성**: 사용자가 직접 채팅 방을 생성할 수 있다.
3. **실시간 채팅**: WebSocket을 사용해 실시간으로 메시지를 주고받을 수 있다.
4. **다중 사용자 참여**: 여러 사용자가 하나의 채팅 방에 참여할 수 있다.
5. **자동 로그인 및 프로필 관리**: 자동 로그인 기능과 함께 사용자는 닉네임 및 프로필을 변경할 수 있으며, 프로필은 미리 설정된 이미지 중 랜덤으로 선택된다.

# 프로젝트 이슈 기록

## 날짜: 2024/09/19

### 1. Electron.js에서 frontend 연동 문제

- **문제**: Electron.js와 React를 연동할 때, React 프로젝트를 하위 폴더인 `frontend` 폴더에 배치하지 않아서 경로 관련 문제 발생.
- **해결 방법**: React 프로젝트를 `frontend` 폴더로 이동하고, `main.js`에서 해당 경로로 올바르게 로드하여 문제 해결.

### 2. GPU 관련 문제

- **문제**: Mac에서 Electron 실행 시 EGL Driver와 관련된 GPU 하드웨어 가속 문제 발생. 오류 메시지:EGL Driver message (Error) eglQueryDeviceAttribEXT: Bad attribute.
- **해결 방법**: Electron에서 하드웨어 가속을 비활성화하여 문제 해결. `main.js`에 `app.disableHardwareAcceleration();` 추가.
- **출처**: [Electron Issue #28164](https://github.com/electron/electron/issues/28164)

### 3. Electron 및 Express 서버 실행 구조 개선

- **문제**: Electron과 Express 서버를 동시에 실행하기 위한 스크립트가 정의되지 않아, 두 서버를 각각 실행할 수 없었음.
- **해결 방법**: `package.json`에 `"start": "node server.js"`로 Express 서버를 실행하고, `"electron": "electron ."`로 Electron을 실행하도록 스크립트를 수정.
