var posts=["2024/11/02/2024浙江省初/","2024/11/09/省赛碎碎念/","2024/10/22/Web-Basic/Pickle反序列化漏洞小结/","2024/10/25/Web-Basic/PHP反序列化由浅入深/","2024/10/27/Web-Java_Security/Java反射-RCE/","2024/10/25/Web-Red_Team/Cobalt Strike入门/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };