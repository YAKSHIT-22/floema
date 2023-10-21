/*! For license information please see main.eeaeedcd0aacfcaf1ff2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js");Object(function(){var e=new Error("Cannot find module 'classes/Detection'");throw e.code="MODULE_NOT_FOUND",e}());var o=s("./app/shaders/plane-vertex.glsl"),n=s("./app/shaders/plane-fragment.glsl");class d{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.gl=s,this.geometry=t,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight;Object(function(){var e=new Error("Cannot find module 'classes/Detection'");throw e.code="MODULE_NOT_FOUND",e}())();this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"c1187c68680d4e6a07e5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBT21CLElBQU0zQyxHQUFLSyxPQUFPZ0MsWUFFMUJPLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLDBDQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsR0FFZGxELEtBQUswQixLQUFLc0IsU0FBUzFDLEVBQUtOLEtBQUtELE1BQU0yQyxPQUFTLEVBQU0xQyxLQUFLMEIsS0FBS29CLE1BQU14QyxFQUFJLEVBQU1OLEtBQUtNLEVBQUtOLEtBQUtELE1BQU0yQyxNQUNuRyxDQUVBUyxNQUFBQSxDQUFPVixHQUNBekMsS0FBSzhCLFNBRVY5QixLQUFLaUMsUUFBUVEsR0FDYnpDLEtBQUtrQyxRQUFRLEdBQ2Ysa0JDL0hGa0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbmltcG9ydCB7IE1lc2gsIFByb2dyYW0sIFRleHR1cmUgfSBmcm9tICdvZ2wnO1xyXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcclxuXHJcbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnY2xhc3Nlcy9EZXRlY3Rpb24nO1xyXG5cclxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XHJcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeTtcclxuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcclxuXHJcbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIHRoaXMuY3JlYXRlUHJvZ3JhbSgpO1xyXG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XHJcblxyXG4gICAgdGhpcy5leHRyYSA9IHtcclxuICAgICAgeDogMCxcclxuICAgICAgeTogMCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjcmVhdGVUZXh0dXJlKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCk7XHJcblxyXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcblxyXG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcclxuICAgIHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG4gICAgdGhpcy5pbWFnZS5vbmxvYWQgPSAoXykgPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlUHJvZ3JhbSgpIHtcclxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcclxuICAgICAgZnJhZ21lbnQsXHJcbiAgICAgIHZlcnRleCxcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVzaCgpIHtcclxuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcclxuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXHJcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XHJcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XHJcblxyXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpO1xyXG4gICAgdGhpcy51cGRhdGVYKCk7XHJcbiAgICB0aGlzLnVwZGF0ZVkoKTtcclxuICB9XHJcblxyXG4gIC8vIEFuaW1hdGlvbnNcclxuICBzaG93KCkge1xyXG4gICAgR1NBUC5mcm9tVG8oXHJcbiAgICAgIHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXHJcbiAgICAgIHtcclxuICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiAxLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xyXG4gICAgICB2YWx1ZTogMCxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRXZlbnRzXHJcblxyXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcclxuICAgIHRoaXMuZXh0cmEgPSAwO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKTtcclxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpO1xyXG4gICAgdGhpcy51cGRhdGVZKDApO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9vcC5cclxuXHJcbiAgdXBkYXRlU2NhbGUoKSB7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVYKHggPSAwKSB7XHJcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAgKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmE7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlWSh5ID0gMCkge1xyXG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGV4dHJhID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDIwIDogNDA7XHJcblxyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAgKiB0aGlzLnNpemVzLmhlaWdodCk7IC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKHNjcm9sbCkge1xyXG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudXBkYXRlWChzY3JvbGwpO1xyXG4gICAgdGhpcy51cGRhdGVZKDApO1xyXG4gIH1cclxufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMxMTg3YzY4NjgwZDRlNmEwN2U1XCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsIngiLCJ5IiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiZnJvbVRvIiwiaGlkZSIsInRvIiwib25SZXNpemUiLCJzY3JvbGwiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwiRGV0ZWN0aW9uIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9