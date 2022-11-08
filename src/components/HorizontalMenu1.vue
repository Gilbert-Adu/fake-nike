<template>
    <div>
        <div class="scrollmenu">
        <img class="first-image" src="../assets/talles-shoe.jpg" alt="">
        <img class="first-image" src="../assets/tom-shoe.jpg" alt="">
        <img class="first-image" src="../assets/bryce-shoe.jpg" alt="">
        <img class="first-image" src="../assets/djalil-shoe.jpg" alt="">
        <img class="first-image" src="../assets/fachry-shoe.jpg" alt="">
    </div>
    </div>
</template>
<script>
export default{

}
</script>
<style>

@media screen and (min-width: 601px) {
    .scrollmenu {
    background-color: #eee;
    margin-top: 300px;
}
.first-image {
    margin-left: 50px;
    width: 400px;
    height:400;
}
img {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 1px;
}
div.scrollmenu {
    background-color: white;
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu img {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

}

@media screen and (max-width: 600px) {
    .scrollmenu {
    background-color: #eee;
    margin-top: 300px;
}
.first-image {
    margin-left: 10px;
    width: 200px;
    height:200;
}
img {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-right: 1px;
}
div.scrollmenu {
    background-color: white;
    overflow: auto;
    white-space: nowrap;
}

div.scrollmenu img {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

}

</style>