<template>
<div>
    <div id="st-preloader">
        <div class="st-preloader-circle">
        </div>
    </div>

    <header class="header">
        <div class="logo text-center">
            <h1>Blog</h1>
            <p>Lorem Ipsum</p>
        </div>
    </header>

    <nav class="navbar main-menu">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar"
                        aria-expanded="false">
                </button>
            </div>
            <div id="myNavbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown"><a href="index.html" class="dropdown-toggle " data-toggle="dropdown" role="button"
                                            aria-haspopup="true" aria-expanded="false">home</a>
                        <ul class="dropdown-menu">
                            <li class="active"><a href="index.html">home one</a></li>
                            <li><a href="#">home two</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button"
                                            aria-haspopup="true" aria-expanded="false">Gallery</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Gallery with 2 Columns</a></li>
                        </ul>
                    </li>
                    <li><a href="category-template.html" class="">travel</a></li>
                    <li class="dropdown"><a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button"
                                            aria-haspopup="true" aria-expanded="false">Templates</a>
                        <ul class="dropdown-menu">
                            <li><a href="#">about me</a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About </a></li>
                    <li><a href="contact.html"> Contact</a></li>
                </ul>
                <div class="show-search">
                    <form method="get" id="search-form" action="#">
                        <input type="text" placeholder="Search and hit enter..." name="s" >
                    </form>
                </div>
            </div>
        </div>
    </nav>

    <div class="main-content">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <article class="post">
                        <div class="post-thumb">
                            <a href="#"><img src="./assets/images/blog-1.jpg" alt=""></a>
                            <a href="#" class="post-thumb-overlay text-center">
                                <div class="text-uppercase text-center"><i class="fa fa-search"></i></div>
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="post-header">
                                <h2><a href="">Winter Tour at Kasmir, Pakistan </a> <span
                                        class="pull-right">Sep 16</span></h2>
                            </div>
                            <div class="entry-content">
                                <p>Porem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam volu vero eos et accusam et
                                    justo duo dolores et ea rebum. Stet clita kasd gubergreno takimata sanctus est Lorem
                                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                    nonumy eirmod tempor invidunt ut labore et domagna aliquyam erat, sed diam voluptua. At
                                    vero eos et accusam et justo duo ea rebum. Stet clita kasd gubergren, no sea takimata
                                    sanctus.</p>
                                <div class="continue-reading text-uppercase">
                                    <a href="#" class="more-link text-center">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <aside class="widget about-me-widget">
                            <div class="about-me-img">
                                <img src="" alt="" class="img-me">
                            </div>
                            <div class="about-me-content">
                                <h3>Macedo <span>Admin</span></h3>

                                <p>Porem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumeirmod tempor
                                    invidunt ut labore. </p>
                            </div>
                        </aside>
                        <aside class="widget p-post-widget">
                            <h3 class="widget-title text-uppercase">Latest Posts</h3>
                            <div class="popular-post">
                                <a href="#" class="popular-img"><img src="./assets/images/blog-2.jpg" alt="">
                                    <div class="p-overlay"></div>
                                </a>
                                <div class="p-content">
                                    <a href="#">Amazing Journey to South Africa</a>
                                    <span class="p-date">February 15, 2016</span>
                                </div>
                            </div>
                            <div class="popular-post">
                                <a href="#" class="popular-img"><img src="./assets/images/blog-3.jpg" alt="">
                                    <div class="p-overlay"></div>
                                </a>
                                <div class="p-content">
                                    <a href="#">A Risky Place with Zero Risk</a>
                                    <span class="p-date">February 15, 2016</span>
                                </div>
                            </div>
                            <div class="popular-post">
                                <a href="#" class="popular-img"><img src="./assets/images/blog-4.jpg" alt="">
                                    <div class="p-overlay"></div>
                                </a>
                                <div class="p-content">
                                    <a href="#">Home is peaceful Place</a>
                                    <span class="p-date">February 15, 2016</span>
                                </div>
                            </div>
                        </aside>
                        <aside class="widget">
                            <h3 class="widget-title text-uppercase">Popular Posts</h3>
                            <div class="thumb-latest-posts">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#" class="popular-img"><img src="./assets/images/pl-post-1.jpg" alt="">
                                            <div class="p-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="p-content">
                                        <h3><a href="#">An Edge of Ocean</a></h3>
                                        <span class="p-date">February 15, 2017</span>
                                    </div>
                                </div>
                            </div>
                            <div class="thumb-latest-posts">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#" class="popular-img"><img src="./assets/images/pl-post-2.jpg" alt="">
                                            <div class="p-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="p-content">
                                        <h3><a href="#">Beauty Never Ends</a></h3>
                                        <span class="p-date">February 15, 2017</span>
                                    </div>
                                </div>
                            </div>
                            <div class="thumb-latest-posts">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#" class="popular-img"><img src="./assets/images/pl-post-3.jpg" alt="">
                                            <div class="p-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="p-content">
                                        <h3><a href="#">AWSM Standard Post</a></h3>
                                        <span class="p-date">February 15, 2017</span>
                                    </div>
                                </div>
                            </div>
                            <div class="thumb-latest-posts">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#" class="popular-img"><img src="./assets/images/pl-post-4.jpg" alt="">
                                            <div class="p-overlay"></div>
                                        </a>
                                    </div>
                                    <div class="p-content">
                                        <h3><a href="#">Beside of Silent Place</a></h3>
                                        <span class="p-date">February 15, 2017</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <aside class="footer-widget">
                        <h3 class="footer-title text-uppercase">About Textual</h3>
                        <div class="about-content">Textual is an awesome WordPress Theme , consetetur sadipscing elitr, sed
                            diam no eirminvidulabore et dolore magna aliquyam erat, sed diam volAt vero eos sit amet,
                            conseteturet.
                        </div>
                        <div class="address">
                            <h4 class="text-uppercase">contact Info</h4>
                            <p><i class="fa fa-home"></i> 239/2 NK Street, DC, USA</p>
                            <p><i class="fa fa-phone"></i> Phone: +123 456 78900</p>
                            <p><i class="fa fa-envelope"></i>theme@textual.com</p>
                        </div>
                    </aside>
                </div>
                <div class="col-md-4">
                    <aside class="footer-tag">
                        <h3 class="footer-title text-uppercase">Tag Clouds</h3>
                        <a href="">Lifestyle</a>
                    </aside>
                </div>
                <div class="col-md-4">
                    <aside class="tweet-post">
                        <h3 class="footer-title text-uppercase">Latest Tweets</h3>
                        <div class="latest-tweet">
                            <p>Check our new theme 'Textual - Personal WordPress Blog Theme' on #themeforest #Envato

                            </p>
                            <a href="">http://t.co/I91Wh7cRh1</a>
                            <p class="tweet-date"><i class="fa fa-twitter"></i>Tweeted on 02:59 AM Sep 22</p>
                        </div>
                    </aside>
                </div>
                <div class="col-md-12">
                    <div class="copyright-area">
                        <div class="copy-text pull-left">
                            <p>&copy; 2016 <a href="#">Textual</a>, Designed by <a href="#">ShapedTheme </a> in Dhaka</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
