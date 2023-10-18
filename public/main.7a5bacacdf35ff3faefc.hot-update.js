/*! For license information please see main.7a5bacacdf35ff3faefc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),n=s("./node_modules/ogl/src/core/Mesh.js");Object(function(){var e=new Error("Cannot find module 'shaders/planne-vertex.glsl'");throw e.code="MODULE_NOT_FOUND",e}());var r=s("./app/shaders/plane-fragment.glsl");const a=class{constructor({element:e,index:t,gl:s,geometry:i,scene:h,sizes:n}){this.element=e,this.index=t,this.gl=s,this.geometry=i,this.scene=h,this.sizes=n,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{transparent:!0,fragment:r.default,vertex:Object(function(){var e=new Error("Cannot find module 'shaders/planne-vertex.glsl'");throw e.code="MODULE_NOT_FOUND",e}()),uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new n.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.position.x+=this.index*this.mesh.scale.x}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){}hide(){}onResize(e){this.createBounds(e)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"014279f9d53fe201a451"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0JDdEZGSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSwgVGV4dHVyZSB9IGZyb20gJ29nbCdcclxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5uZS12ZXJ0ZXguZ2xzbCdcclxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICBjb25zdHJ1Y3RvciAoeyBlbGVtZW50LCBpbmRleCwgZ2wsIGdlb21ldHJ5LCBzY2VuZSwgc2l6ZXMgfSkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgdGhpcy5pbmRleCA9IGluZGV4XHJcbiAgICB0aGlzLmdsID0gZ2xcclxuICAgIHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxyXG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXHJcbiAgICB0aGlzLnNpemVzID0gc2l6ZXNcclxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXHJcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKVxyXG4gICAgdGhpcy5jcmVhdGVNZXNoKClcclxuICB9XHJcblxyXG4gIGNyZWF0ZVRleHR1cmUgKCkge1xyXG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcclxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcclxuICAgIHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xyXG4gICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXHJcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVQcm9ncmFtICgpIHtcclxuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcclxuICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgIGZyYWdtZW50LFxyXG4gICAgICB2ZXJ0ZXgsXHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNyZWF0ZU1lc2ggKCkge1xyXG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xyXG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcclxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtXHJcbiAgICB9KVxyXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqIHRoaXMubWVzaC5zY2FsZS54XHJcbiAgfVxyXG5cclxuICBjcmVhdGVCb3VuZHMgKHsgc2l6ZXMgfSkge1xyXG4gICAgdGhpcy5zaXplcyA9IHNpemVzXHJcbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpXHJcbiAgICB0aGlzLnVwZGF0ZVgoKVxyXG4gICAgdGhpcy51cGRhdGVZKClcclxuICB9XHJcblxyXG4gIHNob3cgKCkge1xyXG4gIH1cclxuXHJcbiAgaGlkZSAoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUgKHNpemVzKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjYWxlICgpIHtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG5cclxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcclxuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlWCAoeCA9IDApIHtcclxuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVZICh5ID0gMCkge1xyXG4gICAgdGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUgKHNjcm9sbCkge1xyXG4gICAgaWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXHJcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXHJcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpXHJcbiAgfVxyXG59XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxNDI3OWY5ZDUzZmUyMDFhNDUxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImluZGV4IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJ0cmFuc3BhcmVudCIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInBvc2l0aW9uIiwieCIsInNjYWxlIiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJoaWRlIiwib25SZXNpemUiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInkiLCJsZWZ0IiwidG9wIiwidXBkYXRlIiwic2Nyb2xsIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9