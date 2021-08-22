package net.salvatorelaisa {
  import com.greensock.TweenLite;
  import flash.display.MovieClip;
  import flash.events.MouseEvent;
  
  public class Pulsante extends MovieClip {
      
    public var twitter:MovieClip;
    
    public var facebook:MovieClip;
    
    public var email:MovieClip;
    
    public var valTrasp:Number = 0.6;
    
    public function Pulsante() {
      super();
      this.alpha = this.valTrasp;
      this.buttonMode = true;
      this.addEventListener(MouseEvent.MOUSE_OVER,this.passaMouse);
      this.addEventListener(MouseEvent.MOUSE_OUT,this.viaMouse);
    }
    
    public function passaMouse(param1:MouseEvent) : void {
      TweenLite.to(this,0.4,{
        "alpha":1,
        "scaleX":1.7,
        "scaleY":1.7
      });
    }
    
    public function viaMouse(param1:MouseEvent) : void {
      TweenLite.to(this,1,{
        "alpha":this.valTrasp,
        "scaleX":1,
        "scaleY":1
      });
    }
  }
}
