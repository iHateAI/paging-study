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
        <tr v-for="post in postList" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.author}}</td>
          <td>{{post.createDate}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {

  },
  data() {
    return {
      postList: [
        {id: 1, title: '제목 1', author: '익명 1', createDate: '2020-12-02'}, 
        {id: 2, title: '제목 2', author: '익명 2', createDate: '2020-12-02'}, 
        {id: 3, title: '제목 3', author: '익명 3', createDate: '2020-12-02'}, 
        {id: 4, title: '제목 4', author: '익명 4', createDate: '2020-12-02'}
      ]
    }
  },
  created() {
    axios.get('http://localhost:3000/boards?pageNum=1&pageSize=5', {withCredentials: true})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  },
}
</script>






<style scoped>
.board {
  width: 600px;
  text-align: center;
}

</style>