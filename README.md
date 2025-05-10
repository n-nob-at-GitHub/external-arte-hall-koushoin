# external-arte-hall-koushoin
This repository is used for external by arte-hall project.

- プロジェクト.
  - [nvm](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) から（[nvm-setup.exe]ファイルを）download ＆ install
    ```
    > nvm -v
    1.1.12
    ```
  - [Node.js](https://nodejs.org/docs/latest/api/) (※nvm use 22.4.1 で [C:\Program Files\nodejs] に リンクが生成された).
    - Windows OS の 32bit環境では, nvm install 20.14.0 32, nvm use 20.14.0 32 のように読み替えること
    ```
    > nvm install 20.14.0
    > nvm use 20.14.0
    > node -v
    v20.14.0
    
    > npm -v
    10.7.0
    ```
    
  - [React](https://react.dev/reference/react)
    - 以下のコマンドで, プロジェクト作成すると, react (19), react-dom (19), @types/react (19), @types/react-dom (19) が導入されることを確認した（2025/05/10）
    - ブラウザでの表示は, http://localhost:3000/ で確認した（2025/05/10）
    ```
    > npx create-next-app@latest simple-arte-homepage --ts
    > cd simple-arte-homepage
    > npm run dev
    ```
    

