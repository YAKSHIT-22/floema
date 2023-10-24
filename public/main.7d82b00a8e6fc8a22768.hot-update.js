/*! For license information please see main.7d82b00a8e6fc8a22768.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/About/index.js"),c=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/Home/index.js"),l=s("./app/components/Canvas/Detail/index.js"),d=s("./app/components/Canvas/Transition.js");class r{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes,transition:this.transition})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.home&&this.home.hide(),this.detail&&this.detail.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new d.default({gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}),this.transition.setElement(this.collections||this.detail))}onChangeEnd(t){"home"===t?this.createHome():this.home&&this.destroyHome(),"about"===t?this.createAbout():this.about&&this.destroyAbout(),"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"detail"===t?this.createDetail():this.detail&&this.destroyDetail(),this.template=t}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i),this.detail&&this.detail.onResize(i),this.home&&this.home.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.about&&this.about.onTouchDown(e),this.collections&&this.collections.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.home&&this.home.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i),this.home&&this.home.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.changedTouches?t.changedTouches[0].clientX:t.clientX,s=t.changedTouches?t.changedTouches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i),this.home&&this.home.onTouchUp(i)}onWheel(t){this.collections&&this.collections.onWheel(t),this.home&&this.home.onWheel(t)}update(t){this.about&&this.about.update(t),this.collections&&this.collections.update(),this.detail&&this.detail.update(),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"6f5584d73a5d65eb9237"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxHQUFHSCxRQUFVSixFQUFFSSxRQUU3RHhFLEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRWIsTUFBTTZELEVBQVMsQ0FDYmpFLEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR05MLEtBQUtnQyxPQUNQaEMsS0FBS2dDLE1BQU0wQyxVQUFVUixHQUduQmxFLEtBQUtvQyxhQUNQcEMsS0FBS29DLFlBQVlzQyxVQUFVUixHQUd6QmxFLEtBQUt5QyxRQUNQekMsS0FBS3lDLE9BQU9pQyxVQUFVUixHQUdwQmxFLEtBQUswQixNQUNQMUIsS0FBSzBCLEtBQUtnRCxVQUFVUixFQUV4QixDQUVBVSxPQUFBQSxDQUFTUixHQUNIcEUsS0FBS29DLGFBQ1BwQyxLQUFLb0MsWUFBWXdDLFFBQVFSLEdBRXZCcEUsS0FBSzBCLE1BQ1AxQixLQUFLMEIsS0FBS2tELFFBQVFSLEVBRXRCLENBRUFTLE1BQUFBLENBQVFDLEdBQ0Y5RSxLQUFLZ0MsT0FDUGhDLEtBQUtnQyxNQUFNNkMsT0FBT0MsR0FHaEI5RSxLQUFLb0MsYUFDUHBDLEtBQUtvQyxZQUFZeUMsU0FHZjdFLEtBQUt5QyxRQUNQekMsS0FBS3lDLE9BQU9vQyxTQUdWN0UsS0FBSzBCLE1BQ1AxQixLQUFLMEIsS0FBS21ELFNBR1o3RSxLQUFLVSxTQUFTcUUsT0FBTyxDQUNuQjVELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUVoQixrQkMxVUZ5RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCdcclxuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcclxuaW1wb3J0IERldGFpbCBmcm9tICcuL0RldGFpbCdcclxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xyXG4gIGNvbnN0cnVjdG9yICh7IHRlbXBsYXRlIH0pIHtcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxyXG5cclxuICAgIHRoaXMueCA9IHtcclxuICAgICAgc3RhcnQ6IDAsXHJcbiAgICAgIGRpc3RhbmNlOiAwLFxyXG4gICAgICBlbmQ6IDBcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnkgPSB7XHJcbiAgICAgIHN0YXJ0OiAwLFxyXG4gICAgICBkaXN0YW5jZTogMCxcclxuICAgICAgZW5kOiAwXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpXHJcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXHJcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcclxuXHJcbiAgICB0aGlzLm9uUmVzaXplKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVJlbmRlcmVyICgpIHtcclxuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xyXG4gICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgYW50aWFsaWFzOiB0cnVlXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNhbWVyYSAoKSB7XHJcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcclxuXHJcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2NlbmUgKCkge1xyXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlSG9tZSAoKSB7XHJcbiAgICB0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XHJcbiAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZXN0cm95SG9tZSAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXHJcblxyXG4gICAgdGhpcy5ob21lLmRlc3Ryb3koKVxyXG4gICAgdGhpcy5ob21lID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQWJvdXQgKCkge1xyXG4gICAgdGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XHJcbiAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcclxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZXN0cm95QWJvdXQgKCkge1xyXG4gICAgaWYgKCF0aGlzLmFib3V0KSByZXR1cm5cclxuXHJcbiAgICB0aGlzLmFib3V0LmRlc3Ryb3koKVxyXG4gICAgdGhpcy5hYm91dCA9IG51bGxcclxuICB9XHJcblxyXG4gIGNyZWF0ZUNvbGxlY3Rpb25zICgpIHtcclxuICAgIHRoaXMuY29sbGVjdGlvbnMgPSBuZXcgQ29sbGVjdGlvbnMoe1xyXG4gICAgICBnbDogdGhpcy5nbCxcclxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb25cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZXN0cm95Q29sbGVjdGlvbnMgKCkge1xyXG4gICAgaWYgKCF0aGlzLmNvbGxlY3Rpb25zKSByZXR1cm5cclxuXHJcbiAgICB0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxyXG4gICAgdGhpcy5jb2xsZWN0aW9ucyA9IG51bGxcclxuICB9XHJcblxyXG4gIGNyZWF0ZURldGFpbCAoKSB7XHJcbiAgICB0aGlzLmRldGFpbCA9IG5ldyBEZXRhaWwoe1xyXG4gICAgICBnbDogdGhpcy5nbCxcclxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXHJcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGlzLnRyYW5zaXRpb25cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZXN0cm95RGV0YWlsICgpIHtcclxuICAgIGlmICghdGhpcy5kZXRhaWwpIHJldHVyblxyXG5cclxuICAgIHRoaXMuZGV0YWlsLmRlc3Ryb3koKVxyXG4gICAgdGhpcy5kZXRhaWwgPSBudWxsXHJcbiAgfVxyXG5cclxuICBvblByZWxvYWRlZCAoKSB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZVN0YXJ0ICh0ZW1wbGF0ZSwgdXJsKSB7XHJcbiAgICBpZiAodGhpcy5hYm91dCkge1xyXG4gICAgICB0aGlzLmFib3V0LmhpZGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ob21lKSB7XHJcbiAgICAgIHRoaXMuaG9tZS5oaWRlKClcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRldGFpbCkge1xyXG4gICAgICB0aGlzLmRldGFpbC5oaWRlKClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXHJcbiAgICB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMgPSB0aGlzLnRlbXBsYXRlID09PSAnZGV0YWlsJyAmJiB1cmwuaW5kZXhPZignY29sbGVjdGlvbnMnKSA+IC0xXHJcblxyXG4gICAgaWYgKHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oe1xyXG4gICAgICAgIGdsOiB0aGlzLmdsLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxyXG4gICAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxyXG4gICAgICAgIHVybFxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLnRyYW5zaXRpb24uc2V0RWxlbWVudCh0aGlzLmNvbGxlY3Rpb25zIHx8IHRoaXMuZGV0YWlsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VFbmQgKHRlbXBsYXRlKSB7XHJcbiAgICBpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xyXG4gICAgICB0aGlzLmNyZWF0ZUhvbWUoKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5kZXN0cm95SG9tZSgpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQWJvdXQoKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFib3V0KSB7XHJcbiAgICAgIHRoaXMuZGVzdHJveUFib3V0KClcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpIHtcclxuICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcclxuICAgICAgdGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0ZW1wbGF0ZSA9PT0gJ2RldGFpbCcpIHtcclxuICAgICAgdGhpcy5jcmVhdGVEZXRhaWwoKVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmRldGFpbCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lEZXRhaWwoKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUgKCkge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xyXG4gICAgICBhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxyXG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxyXG4gICAgY29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcclxuXHJcbiAgICB0aGlzLnNpemVzID0ge1xyXG4gICAgICBoZWlnaHQsXHJcbiAgICAgIHdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsdWVzID0ge1xyXG4gICAgICBzaXplczogdGhpcy5zaXplc1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmFib3V0KSB7XHJcbiAgICAgIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbGxlY3Rpb25zKSB7XHJcbiAgICAgIHRoaXMuY29sbGVjdGlvbnMub25SZXNpemUodmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRldGFpbCkge1xyXG4gICAgICB0aGlzLmRldGFpbC5vblJlc2l6ZSh2YWx1ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaG9tZSkge1xyXG4gICAgICB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Ub3VjaERvd24gKGUpIHtcclxuICAgIHRoaXMuaXNEb3duID0gdHJ1ZVxyXG5cclxuICAgIHRoaXMueC5zdGFydCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXHJcbiAgICB0aGlzLnkuc3RhcnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hYm91dCkge1xyXG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hEb3duKHZhbHVlcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kZXRhaWwpIHtcclxuICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaERvd24odmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG91Y2hNb3ZlIChlKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCB4ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFggOiBlLmNsaWVudFhcclxuICAgIGNvbnN0IHkgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxyXG5cclxuICAgIHRoaXMueC5lbmQgPSB4XHJcbiAgICB0aGlzLnkuZW5kID0geVxyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hYm91dCkge1xyXG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kZXRhaWwpIHtcclxuICAgICAgdGhpcy5kZXRhaWwub25Ub3VjaE1vdmUodmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVG91Y2hVcCAoZSkge1xyXG4gICAgdGhpcy5pc0Rvd24gPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0IHggPSBlLmNoYW5nZWRUb3VjaGVzID8gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYIDogZS5jbGllbnRYXHJcbiAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlcyA/IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxyXG5cclxuICAgIHRoaXMueC5lbmQgPSB4XHJcbiAgICB0aGlzLnkuZW5kID0geVxyXG5cclxuICAgIGNvbnN0IHZhbHVlcyA9IHtcclxuICAgICAgeDogdGhpcy54LFxyXG4gICAgICB5OiB0aGlzLnlcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hYm91dCkge1xyXG4gICAgICB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRldGFpbCkge1xyXG4gICAgICB0aGlzLmRldGFpbC5vblRvdWNoVXAodmFsdWVzKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbldoZWVsIChlKSB7XHJcbiAgICBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xyXG4gICAgICB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZSlcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5ob21lLm9uV2hlZWwoZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSAoc2Nyb2xsKSB7XHJcbiAgICBpZiAodGhpcy5hYm91dCkge1xyXG4gICAgICB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcclxuICAgICAgdGhpcy5jb2xsZWN0aW9ucy51cGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRldGFpbCkge1xyXG4gICAgICB0aGlzLmRldGFpbC51cGRhdGUoKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmhvbWUpIHtcclxuICAgICAgdGhpcy5ob21lLnVwZGF0ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xyXG4gICAgICBjYW1lcmE6IHRoaXMuY2FtZXJhLFxyXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmY1NTg0ZDczYTVkNjVlYjkyMzdcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsInRyYW5zaXRpb24iLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJjcmVhdGVEZXRhaWwiLCJkZXRhaWwiLCJEZXRhaWwiLCJkZXN0cm95RGV0YWlsIiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJ1cmwiLCJoaWRlIiwiaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCIsImluZGV4T2YiLCJpc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zIiwiVHJhbnNpdGlvbiIsInNldEVsZW1lbnQiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZSIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiY2hhbmdlZFRvdWNoZXMiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9