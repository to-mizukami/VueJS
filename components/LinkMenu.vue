<template>
  <div>
    <ol>
      <li v-for="(link, index) in links" :key=index>
        <router-link v-bind:to=link.path>
          {{link.title}}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'LinkMenu',
  data () {
    return {
      links: [
        { title: '1の扉', path: '/first' },
        { title: '2の扉', path: '/second' },
        { title: '3の扉', path: '/third' }
      ]
    }
  }
}
</script>

<style>
ol {
  display:flex;
  justify-content: center;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;

}
</style>
