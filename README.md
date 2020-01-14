# npm & webpack 세미나

- 웹팩 사용법
- 로더
  - 커스텀 로더는 함수로 만든다.
  - style-loader는 읽은 css를 적용
  - 로더는 뒤에서부터 로딩
  - url-loader는 내부적으로 file-loader를 사용하며 일정 크기 이상을 js 안에 base64로 포함한다.
- 플러그인
  - 커스텀 플러그인은 클래스로 만든다.
  - DefinePlugin 사용 시 process.env.NODE_ENV는 웹팩에 mode로 들어간다. 하지만 process.env는 빈 객체로 존재한다.
