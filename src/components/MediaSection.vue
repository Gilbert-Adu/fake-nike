<template>
    <div>
        <h3 style="margin-left: 70px;">{{ title }}</h3>
        <img class="media-img" src='../assets/yellow-shoe.jpg' alt="">
    </div>
</template>
<script>
export default {

    props: {
        title: String,

    }
    
}
</script>
<style>

@media screen and (min-width: 601px) {
    .media-img {
        width: 90%;
        height: 50%;
        margin-left: 70px;
    }
}

@media screen and (max-width: 600px) {
    .media-img {
        margin-top: 20px;
        width: 100%;
        height: 50%;
    }
}
</style>
