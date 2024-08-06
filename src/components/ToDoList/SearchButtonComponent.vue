<template>
  <div class="searchButton">
    <button>
      <img
        width="12"
        height="12"
        src="https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png"
        alt="search--v1"
      />
    </button>
  </div>
</template>
<style scoped>
.searchButton{
  display: flex;
  justify-content: end  ;
  width: 100%;
}
button {
  background: rgb(7, 63, 216);
  border: 2px solid rgb(7, 63, 216);
  border-radius: 9px;
  padding: 10px 12px;
  cursor: pointer;
  color: white;
  width: 100%;
}

button:hover {
  background: white;
  box-shadow: 1px 1px 12px;
  border: 2px solid rgb(7, 63, 216);
  color: black;
}
</style>
