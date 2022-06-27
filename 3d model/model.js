let scene, camera, renderer;
var HEIGHT, WIDTH;

      function init() {

        scene = new THREE.Scene();
        //scene.background = new THREE.Color(0xdddddd);

        const loader1 = new THREE.TextureLoader();
        loader1.load('https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg' , function(texture)
        {
            scene.background = texture;  
        });


        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
        camera.rotation.y = 45/180*Math.PI;
        camera.position.x = 800;
        camera.position.y = 100;
        camera.position.z = 1000;

        controls = new THREE.OrbitControls(camera,renderer.domElement);
        controls.addEventListener('change', renderer);

        hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);

        directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        light = new THREE.PointLight(0xc4c4c4,10);
        light.position.set(0,300,500);
        scene.add(light);
        light2 = new THREE.PointLight(0xc4c4c4,10);
        light2.position.set(500,100,0);
        scene.add(light2);
        light3 = new THREE.PointLight(0xc4c4c4,10);
        light3.position.set(0,100,-500);
        scene.add(light3);
        light4 = new THREE.PointLight(0xc4c4c4,10);
        light4.position.set(-500,300,500);
        scene.add(light4);


        let loader = new THREE.GLTFLoader();
        loader.load('ufo9.gltf', function(gltf){
          car = gltf.scene;
          car.scale.set(10,10,10);
          scene.add(gltf.scene);
          car.position.z = 15 ; 
          animate();
        });
      }
      function animate() {
        if (car && car.rotation) {
            car.rotation.y -= 0.05;
        }
        document.onmousemove = function(e)
        {
          car.position.x = -900 + e.pageX ; 
          car.position.y = 400 - e.pageY;
        }

        // document.onkeypress= function(e){
        //     var keycode = (event.keyCode ? event.keyCode : event.which);
        //     if (keycode == '13') {
        //         car.position.x += 10 ; 
        //         }
        //         else{
        //             car,position.x -= 10 ; 
        //         }
        // }
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
      }
      init();