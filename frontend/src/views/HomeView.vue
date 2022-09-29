<template>
  <div class="home">
    <h1>게시판 페이징 기능 구현</h1>
    <div class="board-container">
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
            <td>{{post.created_at}}</td>
          </tr>
        </tbody>
      </table>
      <div class="seq">
        <button @click="getPreviosPage">이전</button>
        <span>{{pageNum}}</span>
        /
        <span>{{maxPageNum}}</span>
        <button @click="getNextPage">다음</button>
      </div>
    </div>
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
      pageNum: 1,
      pageSize: 5,
      maxPageNum: null,
      postList: []
    }
  },
  methods: {
    getPreviosPage: function() {
      if (this.pageNum !== 1)
        this.pageNum--;
      axios.get(`http://localhost:3000/boards?pageNum=${this.pageNum}&pageSize=5`)
      .then(res => {
        const { pages } = res.data.data;
        this.postList = pages;
      })
      .catch(err => {
        console.error(err);
      });
    },
    getNextPage: function() {
      if (this.pageNum !== this.maxPageNum)
      this.pageNum++;
      axios.get(`http://localhost:3000/boards?pageNum=${this.pageNum}&pageSize=5`)
      .then(res => {
        const { pages } = res.data.data;
        this.postList = pages;
      })
      .catch(err => {
        console.error(err);
      });
    }
  }, 
  created() {
    axios.get('http://localhost:3000/boards?pageNum=1&pageSize=5')
      .then(res => {
        const { pages, pagesCount } = res.data.data;
        this.maxPageNum = pagesCount;
        this.postList = pages;
      })
      .catch(err => {
        console.error(err);
      });
  },
}
</script>






<style scoped>
.board {
  width: 600px;
  text-align: center;
}

</style>