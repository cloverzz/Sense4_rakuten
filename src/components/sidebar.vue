<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
        <!-- サイドバーメニュー -->
        <p><router-link :to="{name:'scafold',hash:'#aaa'}" class="sidebar-link">aaa</router-link></p>
        <p><router-link :to="{name:'scafold',hash:'#bbb'}" class="sidebar-link">bbb</router-link></p>
        <p><router-link :to="{name:'scafold',hash:'#ccc'}" class="sidebar-link">ccc</router-link></p>
        <p><router-link :to="{name:'scafold',hash:'#ddd'}" class="sidebar-link">ddd</router-link></p>
    </div>
  </div>
</template>

<style>
.sidebar {
  background-color: #bf0000;
  height: 100%; /* サイドバーの高さ */
  width: 200px; /* サイドバーのwidthを指定 */
  max-width: 200px; /* widthの最大値 */
  opacity: 0.9.5; /* 透過する 0に近くほど透過する */
  position: fixed; /* 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
  padding-left: 40px; /* サイドバー内のリンクの位置を右にずらす */
}



.sidebar-link {
  color: #ffffff; /* リンクの文字色を白に */
}

.sidebar-link:hover {
  color: #ffffff /* マウスがリンクに乗った時も文字色を白に */
}
</style>