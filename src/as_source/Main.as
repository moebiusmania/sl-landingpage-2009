package temp_fla {
  import com.greensock.TweenLite;
  import com.greensock.easing.Bounce;
  import com.greensock.easing.Linear;
  import flash.display.MovieClip;
  import flash.events.Event;
  import flash.events.MouseEvent;
  import flash.events.TimerEvent;
  import flash.net.URLRequest;
  import flash.net.navigateToURL;
  import flash.utils.Timer;

  public dynamic class MainTimeline extends MovieClip {

    public var facebook:fb_ico;

    public var centroX:Number;

    public var centroY:Number;

    public var salvo:MovieClip;

    public var arrivoY:Number;

    public var tempo:Timer;

    public var email:email_ico;

    public var arrivoX:Number;

    public var ripiano:MovieClip;

    public var twitter:twitter_ico;

    public var titolo:MovieClip;

    public function MainTimeline() {
      super();
      addFrameScript(0, this.frame1);
    }

    function frame1():* {
      this.arrivoX = new Number(0);
      this.arrivoY = new Number(0);
      this.centroX = this.salvo.x;
      this.centroY = this.salvo.y;
      this.tempo = new Timer(1000);
      this.tempo.start();
      this.salvo.alpha = 0;
      this.ripiano.rotationX = -90;
      this.ripiano.alpha = 0.7;
      TweenLite.from(this.titolo, 1, {"y": -100,
        "ease": Bounce.easeOut});
      TweenLite.to(this.salvo, 1, {"alpha": 1});
      this.facebook.addEventListener(MouseEvent.CLICK, this.social);
      this.twitter.addEventListener(MouseEvent.CLICK, this.social);
      this.email.addEventListener(MouseEvent.CLICK, this.social);
      this.tempo.addEventListener(TimerEvent.TIMER, this.muoviSalvo);
    }

    public function social(param1:MouseEvent):void {
      if (param1.target.name == "facebook") {
        navigateToURL(new URLRequest("http://www.facebook.com/salvatore.laisa"), "_blank");
      } else if (param1.target.name == "email") {
        navigateToURL(new URLRequest("mailto:moebiusmania@gmail.com"), "_blank");
      } else if (param1.target.name == "twitter") {
        navigateToURL(new URLRequest("http://twitter.com/moebiusmania"), "_blank");
      }
    }

    public function muoviSalvo(param1:Event):* {
      this.arrivoX = this.centroX + Math.random() * 40;
      this.arrivoY = this.centroY + Math.random() * 40;
      TweenLite.to(this.salvo, 2, {"x": this.arrivoX,
        "y": this.arrivoY,
        "ease": Linear.easeNone});
    }
  }
}
