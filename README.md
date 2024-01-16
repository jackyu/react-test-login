# 簡單的登入登出 App

## 目的

實作一個簡單的登入/登出功能挑戰，並請遵循以下的規則:

- 裡面的所有元件, 請自己命名成合理的名字.
- 原先給的框架請不要改變, 但命名,設定和内容可以更改.
- 請照著自己覺得合理的邏輯去寫.
- 請使用 CSS
- 請使用 Hook

詳細需求請見 [REQUIREMENT](./REQUIRMENT.md) 內容

## 設定

在專案目錄下，你可以使用 `npm`、`yarn` 或 `pnpm` 三種方式執行安裝，如下:

```shell
npm install
# or
yarn install
# or
pnpm install
```

## 執行

```shell
npm start
# or
yarn start
# or
pnpm start
```

啟動瀏覽器後，輸入 [http://localhost:3000](http://localhost:3000) 檢視執行畫面

## 實作目標

- [X] 全域設定檔
- [X] 檢查密碼規則是否合法，最少 8 個字元，包含 1 個英文字母
- [X] 檢查帳號規則是否合法，沒有特殊符號
- [X] 登入成功的資訊需加密保存
- [X] 未登入成功前，無法執行登出
- [X] 下拉選單，參照 github 的版號下拉樣式設計
- [-] 版本號從 package.json 取得
- [-] 一鍵發佈至 github，更新版號
