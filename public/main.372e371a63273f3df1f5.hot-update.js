/*! For license information please see main.372e371a63273f3df1f5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js");Object(function(){var t=new Error("Cannot find module 'classes/Detection'");throw t.code="MODULE_NOT_FOUND",t}());var o=s("./app/shaders/plane-vertex.glsl"),n=s("./app/shaders/plane-fragment.glsl");class r{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.gl=s,this.geometry=e,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra=0,this.createBounds(t),this.updateX(e),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight;Object(function(){var t=new Error("Cannot find module 'classes/Detection'");throw t.code="MODULE_NOT_FOUND",t}())();this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=58*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-58}update(t){this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0)}}}},(function(t){t.h=()=>"7b7054a8147fcdfa39e2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUMsS0FBS0MsS0FDakgsQ0FFQTRCLE9BQUFBLENBQVMxQixFQUFJLEdBQ1hILEtBQUtHLEdBQUtILEtBQUt5QixPQUFPMEIsSUFBTWhELEdBQUtRLE9BQU9vQyxZQUUxQkssT0FBQUEsV0FBQUEsSUFBQUEsRUFBQUEsSUFBQUEsTUFBQUEsMENBQUFBLE1BQUFBLEVBQUFBLEtBQUFBLG1CQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxHQUVkcEQsS0FBS3NCLEtBQUt1QixTQUFTMUMsRUFBS0gsS0FBS0QsTUFBTStDLE9BQVMsRUFBTTlDLEtBQUtzQixLQUFLMkIsTUFBTTlDLEVBQUksRUFBTUgsS0FBS0csRUFBS0gsS0FBS0QsTUFBTStDLE9BQ2pHOUMsS0FBS3NCLEtBQUt1QixTQUFTMUMsR0FBMkUsR0FBdEV3QyxLQUFLVSxJQUFLckQsS0FBS3NCLEtBQUt1QixTQUFTM0MsRUFBSUYsS0FBS0QsTUFBTTJDLE1BQVNDLEtBQUtDLEdBQUssSUFBWSxFQUNyRyxDQUVBVSxNQUFBQSxDQUFRbEIsR0FDTnBDLEtBQUtxQyxpQkFDTHJDLEtBQUsyQixjQUNMM0IsS0FBSzRCLFFBQVFRLEdBQ2JwQyxLQUFLNkIsUUFBUSxFQUNmLGtCQzdJRjBCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xyXG5cclxuaW1wb3J0IERldGVjdGlvbiBmcm9tICdjbGFzc2VzL0RldGVjdGlvbidcclxuXHJcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcclxuICBjb25zdHJ1Y3RvciAoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgdGhpcy5nbCA9IGdsXHJcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcclxuXHJcbiAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICB4OiAwLFxyXG4gICAgICB5OiAwXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpXHJcbiAgICB0aGlzLmNyZWF0ZU1lc2goKVxyXG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe1xyXG4gICAgICBzaXplczogdGhpcy5zaXplc1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRleHR1cmUgKCkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcclxuXHJcbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvZ3JhbSAoKSB7XHJcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XHJcbiAgICAgIGZyYWdtZW50LFxyXG4gICAgICB2ZXJ0ZXgsXHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1lc2ggKCkge1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xyXG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcclxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZUJvdW5kcyAoeyBzaXplcyB9KSB7XHJcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcclxuXHJcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIHRoaXMudXBkYXRlU2NhbGUoKVxyXG4gICAgdGhpcy51cGRhdGVYKClcclxuICAgIHRoaXMudXBkYXRlWSgpXHJcbiAgfVxyXG5cclxuICAvLyBBbmltYXRpb25zXHJcbiAgc2hvdyAoKSB7XHJcbiAgICBHU0FQLmZyb21UbyhcclxuICAgICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAwXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogMVxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBoaWRlICgpIHtcclxuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEV2ZW50c1xyXG5cclxuICBvblJlc2l6ZSAoc2l6ZXMsIHNjcm9sbCkge1xyXG4gICAgdGhpcy5leHRyYSA9IDBcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcclxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpXHJcbiAgICB0aGlzLnVwZGF0ZVkoMClcclxuICB9XHJcblxyXG4gIC8vIExvb3AuXHJcbiAgdXBkYXRlUm90YXRpb24gKCkge1xyXG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxyXG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIsXHJcbiAgICAgIHRoaXMuc2l6ZXMud2lkdGggLyAyLFxyXG4gICAgICBNYXRoLlBJICogMC4xLFxyXG4gICAgICAtTWF0aC5QSSAqIDAuMSxcclxuICAgICAgdGhpcy5tZXNoLnBvc2l0aW9uLnhcclxuICAgIClcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjYWxlICgpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG5cclxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcclxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxyXG5cclxuICAgIC8vIHNjYWxpbmcgbG9naWMgd2hpbGUgcm90YXRpb25cclxuICAgIC8vIGNvbnN0IHNjYWxlID0gR1NBUC51dGlscy5tYXBSYW5nZSgwLCB0aGlzLnNpemVzLndpZHRoIC8gMiwgMC4xLCAwLCBNYXRoLmFicyh0aGlzLm1lc2gucG9zaXRpb24ueCkpIC8vIHByZXR0aWVyLWlnbm9yZVxyXG5cclxuICAgIC8vIHRoaXMubWVzaC5zY2FsZS54ICs9IHNjYWxlXHJcbiAgICAvLyB0aGlzLm1lc2guc2NhbGUueSArPSBzY2FsZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlWCAoeCA9IDApIHtcclxuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG5cclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlWSAoeSA9IDApIHtcclxuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgIGNvbnN0IGV4dHJhID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDIwIDogNDBcclxuXHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICAqIHRoaXMuc2l6ZXMuaGVpZ2h0KSAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ICs9IE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA1OCAtIDU4IC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlIChzY3JvbGwpIHtcclxuICAgIHRoaXMudXBkYXRlUm90YXRpb24oKVxyXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXHJcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxyXG4gICAgdGhpcy51cGRhdGVZKDApXHJcbiAgfVxyXG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2I3MDU0YTgxNDdmY2RmYTM5ZTJcIikiXSwibmFtZXMiOlsiTWVkaWEiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImZyb21UbyIsImhpZGUiLCJ0byIsIm9uUmVzaXplIiwic2Nyb2xsIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInoiLCJ1dGlscyIsIm1hcFJhbmdlIiwid2lkdGgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInRvcCIsIkRldGVjdGlvbiIsImNvcyIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==