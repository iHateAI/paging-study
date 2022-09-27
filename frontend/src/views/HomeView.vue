<template>
  <div class="home">
    <h1>게시판 페이징 기능 구현</h1>
    <table class="board">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>제목1</td>
          <td>작성자1</td>
          <td>일시</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.board {
  width: 600px;
  text-align: center;
}

</style>