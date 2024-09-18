# 프로젝트 이슈 기록

## 날짜: 2024/09/19

### 1. Electron.js에서 frontend 연동 문제

- **문제**: Electron.js와 React를 연동할 때, React 프로젝트를 하위 폴더인 `frontend` 폴더에 배치하지 않아서 경로 관련 문제 발생.
- **해결 방법**: React 프로젝트를 `frontend` 폴더로 이동하고, `main.js`에서 해당 경로로 올바르게 로드하여 문제 해결.

### 2. GPU 관련 문제

- **문제**: Mac에서 Electron 실행 시 EGL Driver와 관련된 GPU 하드웨어 가속 문제 발생. 오류 메시지:EGL Driver message (Error) eglQueryDeviceAttribEXT: Bad attribute.
- **해결 방법**: Electron에서 하드웨어 가속을 비활성화하여 문제 해결. `main.js`에 `app.disableHardwareAcceleration();` 추가.
- **출처**: [Electron Issue #28164](https://github.com/electron/electron/issues/28164)
