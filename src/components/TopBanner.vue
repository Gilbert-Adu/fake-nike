<template>
    <div>
        <!-- first nav bar -->
        <div class="topnav">
            <a href="">
                <Icon  class="jordan" icon="simple-icons:jordan" color="black" style="font-size: 20px;"/>
            </a>
            <a href="" class="nike-store">Sign in</a>
            <a href="" class="nike-store">Join Us</a>
            <a href="" class="nike-store">Help</a>
            <a href="" class="nike-store">Find a Store</a>
            <!--
            <Icon class="jordan-icon" icon="simple-icons:jordan" color="black" style="font-size: 20px;"/>
            <a href="">Sign in</a>
            <a href="">Join Us</a>
            <a href="">Help</a>
            <a href="">Find a Store</a>
        </div>
        <div class="second-topnav">
            <Icon class="nike-icon" icon="simple-icons:nike" color="black" style="font-size:60px;" />
            <a class="first" href="">New & Featured</a>
            <a class="second" href="">Men</a>
            <a class="third" href="">Women</a>
            <a class="fourth" href="">Kids</a>
            <a class="fifth" href="">Sale</a>
            <a class="sixth" href="">Gifts</a>
            <span class="search">
                <input style="height: 20px;background-color: #eee;border-radius: 15px; height: 30px; border: 1px solid #eee;" type="text" placeholder="Search">
                <Icon icon="akar-icons:heart" color="black" style="margin-left: 40px;"/>
                <Icon icon="bi:bag" color="black" style="margin-left: 40px;"/>
            </span>
            
        </div>
        <div class="third-topnav">
            <a class="deals" href="">Shop Now, Relax Later</a><br>
            <a class="join" href="">Join now</a>
        </div>
        -->
    </div>
    <!-- second navbar-->
    <div class="second-bar">
        <ul>
            <li><a href=""><Icon class="nike" icon="simple-icons:nike" color="black" style="font-size:60px;" /></a></li>
            <li><a href="" class="new-nf">New & Featured</a></li>
            <li><a href="" class="new-men">Men</a></li>
            <li><a href="" class="new-women">Women</a></li>
            <li><a href="" class="new-kids">Kids</a></li>
            <li><a href="" class="new-sale">Sale</a></li>
            <li><a href="" class="new-gifts">Gifts</a></li>
            <li><a href="" class="new-search"><input  class="hide" style="height: 20px;background-color: #eee;border-radius: 15px; height: 30px; border: 1px solid #eee;" type="text" placeholder="Search"></a></li>
            <li><a href="" class="new-heart"><Icon  class="hide" icon="akar-icons:heart" color="black" style="margin-left: 40px;"/></a></li>
            <li><a href="" class="new-bag"><Icon class="hide" icon="bi:bag" color="black" style="margin-left: 40px;"/></a></li>
        </ul>
    </div>

    <!-- third navbar -->
    <div class="third-bar">
        <a class="title">Shop Now, Relax Later</a><br><br>
        <a class="message">Join Now</a>
    </div>
</div>
</template>
<script>
import { Icon } from "@iconify/vue"
export default {
    components: { Icon }
}
</script>

<style>
body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
}
@media screen and (min-width: 601px) {
    .third-bar{
        height: 70px;
        background-color: #eee;
        width: 100%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);    
    }
    .third-bar .title {

        position: absolute;
        top: 45%;
        left: 40%;
        font-size: 18px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        
    }
    .third-bar .message {

        position: absolute;
        top: 75%;
        left: 40%;
        font-size: 13px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        
    }

    .nike {
        flex: right;
    }
    .new-nf {
    position: absolute;
    top: 10%;
    left: 28%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }
    .new-men {
    position: absolute;
    top: 10%;
    left: 35%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }
    .new-women {
    position: absolute;
    top: 10%;
    left: 40%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }
    .new-kids {
    position: absolute;
    top: 10%;
    left: 45%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }

    .new-sale {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }

    .new-gifts {
    position: absolute;
    top: 10%;
    left: 55%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }

    .new-search {
    position: absolute;
    top: 10%;
    left: 85%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }

    .new-heart {
    position: absolute;
    top: 10%;
    left: 90%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }

    .new-bag {
    position: absolute;
    top: 10%;
    left: 93%;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    }
}

.second-bar .nike {
    flex: left;
}



.second-bar li {
    display: inline;
}
@media screen and (max-width: 600px) {
    .third-bar{
        height: 100px;
        background-color: #eee;
        width: 100%;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);    
    }

    .third-bar .title {

        position: absolute;
        top: 45%;
        left: 50%;
        font-size: 18px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        
    }
    .third-bar .message {

        position: absolute;
        top: 75%;
        left: 50%;
        font-size: 13px;
        transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        
    }

    .second-bar-ul {
        width: 100%;
    }
    .second-bar li{
        display: block;
        text-align: center;
        padding: 5px;
        border: 1px solid #e7e7e7;
        background-color: #eee;
        margin-right: 40px;
    }
    .second-bar li .hide, .nike {
        display: none;
    }
}
.second-bar a {
    text-decoration: none;
    color: black;
}
.jordan {
    flex: left;
}


.topnav .jordan {
    padding: 10px;
}
.topnav{
    background-color: #eee;
    overflow: hidden;
}
.topnav .nike-store {
    float: right;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 12px;
}
</style>