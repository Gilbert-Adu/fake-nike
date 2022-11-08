<template>
    <div>
        <div class="message-title">
            <h1>{{ title }}</h1>
            <h6>{{ description }}</h6>
            <span>
                <button style="padding-left: 50px;padding-right: 50px;">Shop All Fleece</button>
                <button style="padding-left: 30px;padding-right: 30px;">Explore Nike Fleece</button>
            </span>    
        </div>
    </div>
</template>
<script>

export default{
    props: {
        title: String,
        description: String,
        
    }
    
}
</script>
<style>
@media screen and (min-width: 601px) {
    button {
    background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;

}
.message-title {
    margin-top: 120px;;
    position: absolute;
    left: 50%;
    border: 1px solid none;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    color: #f2f2f2;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    font-size: 18px;
    color: black;
}

}
@media screen and (max-width: 600px) {
    button {
    background-color: black; /* Green */
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 30px;

}
.message-title {
    margin-top: 50%;
    position: absolute;
    left: 50%;
    border: 1px solid none;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    color: #f2f2f2;
    text-align: center;
    padding: 10px 10px;
    text-decoration: none;
    font-size: 12px;
    color: black;
}

}

</style>
