import * as THREE from 'three';
import * as YUKA from 'yuka';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const loader1 = new THREE.TextureLoader();
loader1.load('./assets/galaxy.jpeg' , function(texture)
        {
            scene.background = texture;  
        });

camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 45/180*Math.PI;
camera.position.x = 8;
camera.position.y = 1;
camera.position.z = 10;

controls = new OrbitControls(camera,renderer.domElement);
controls.addEventListener('change', renderer);

const hlight = new THREE.AmbientLight (0x404040,10);
scene.add(hlight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
directionalLight.position.set(0, 10, -10);
scene.add(directionalLight);

const vehicle = new YUKA.Vehicle();

vehicle.boundingRadius = 10;

vehicle.smoother = new YUKA.Smoother(30);

function sync(entity, renderComponent) {
    renderComponent.matrix.copy(entity.worldMatrix);
}

const path = new YUKA.Path();
path.add( new YUKA.Vector3(-10, 0, -5));
path.add( new YUKA.Vector3(10, 0, -5));
path.add( new YUKA.Vector3(10, 0, 6));
path.add( new YUKA.Vector3(-10, 0, 6));

path.loop = true;

vehicle.position.copy(path.current());

vehicle.maxSpeed = 5;

const followPathBehavior = new YUKA.FollowPathBehavior(path, 3);
vehicle.steering.add(followPathBehavior);

const entityManager = new YUKA.EntityManager();
entityManager.add(vehicle);


const obstacleGeometry = new THREE.BoxBufferGeometry();
obstacleGeometry.computeBoundingSphere();
const obstacleMaterial = new THREE.MeshPhongMaterial({color: 0xee0808});

const obstacleMesh1 = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
scene.add(obstacleMesh1);
obstacleMesh1.position.set(-10 , 0 , -1);

const obstacleMesh2 = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
scene.add(obstacleMesh2);
obstacleMesh2.position.set(10, 0, 1);

const obstacleMesh3 = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
scene.add(obstacleMesh3);
obstacleMesh3.position.set(-1, 0, 6);

const obstacleMesh4 = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
scene.add(obstacleMesh4);
obstacleMesh4.position.set(1, 0, -5);

const obstacle1 = new YUKA.GameEntity();
obstacle1.position.copy(obstacleMesh1.position);
obstacle1.boundingRadius = obstacleGeometry.boundingSphere.radius;
entityManager.add(obstacle1);

const obstacle2 = new YUKA.GameEntity();
obstacle2.position.copy(obstacleMesh2.position);
obstacle2.boundingRadius = obstacleGeometry.boundingSphere.radius;
entityManager.add(obstacle2);

const obstacle3 = new YUKA.GameEntity();
obstacle3.position.copy(obstacleMesh3.position);
obstacle3.boundingRadius = obstacleGeometry.boundingSphere.radius;
entityManager.add(obstacle3);

const obstacle4 = new YUKA.GameEntity();
obstacle4.position.copy(obstacleMesh4.position);
obstacle4.boundingRadius = obstacleGeometry.boundingSphere.radius;
entityManager.add(obstacle4);

const obstacles = [];
obstacles.push(obstacle1, obstacle2 , obstacle3 , obstacle4);

const obstacleAvoidanceBehavior = new YUKA.ObstacleAvoidanceBehavior(obstacles);
vehicle.steering.add(obstacleAvoidanceBehavior);



const loader = new GLTFLoader();
let model ;
loader.load('./assets/ufo8.glb', function(glb) {
    model = glb.scene;
    scene.add(model);
    model.matrixAutoUpdate = false;
    vehicle.scale.set(0.25, 0.25, 0.25);
    vehicle.setRenderComponent(model, sync);
    if (model && model.rotation) {
        model.rotation.y -= 0.05;
    }
});
let model2 ;
const loader2 = new GLTFLoader();
loader2.load('./assets/ufo8.glb', function(glb) {
    model2 = glb.scene;
    scene.add(model2);
    model2.scale.set(0.7 , 0.7 , 0.7) ; 
    animate() ; 
});

let model3 ;
const loader3 = new GLTFLoader();
loader3.load('./assets/NewYork.glb', function(glb) {
    model3 = glb.scene;
    scene.add(model3);
    model3.scale.set(30 ,30, 30) ; 
    model3.position.set(-50,-30,15)
    animate() ; 
});
let model4 ;
const loader4 = new GLTFLoader();
loader4.load('./assets/spaceship.glb', function(glb) {
    model4 = glb.scene;
    scene.add(model4);
    model4.scale.set(0.7 , 0.7 , 0.7)  ; 
    model4.position.set(0,15,0)
    animate() ; 
});


const position = [];
for(let i = path._waypoints.length -1 ; i >= 0 ; i--) {
    const waypoint = path._waypoints[i];
    position.push(waypoint.x, waypoint.y, waypoint.z);
}

const lineGeometry = new THREE.BufferGeometry();
lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3));



const time = new YUKA.Time();

function animate() {
    
    //document.getElementById('./assets/sound.mp3').play();
    if (model2 && model2.rotation) {
        model2.rotation.y -= 0.05;
    }

    document.onmousemove = function(e)
       {
         model4.position.x = -900 + e.pageX ; 
         model4.position.y = 400 - e.pageY;
       }
    document.onkeypress= function(e){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '97') 
        {
            model2.position.x -= 0.25 ; 
            }
        else if(keycode == "100")
            {
                model2.position.x += 0.25 ; 
            }
            else if (keycode == "119"){
                model2.position.y  += 0.25 ; 
            }
            else if(keycode == "115")
            {
                model2.position.y -= 0.25 ; 
            }
            else if(keycode == "101")
            {
                model2.position.z += 0.25 ; 
            }
            else if(keycode == "102")
            {
                model2.position.z -= 0.25 ; 
            }
    }

    const delta = time.update().getDelta();
    entityManager.update(delta);
    renderer.render(scene, camera); 
    renderer.setAnimationLoop(animate);
    
}

requestAnimationFrame(animate);


window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});