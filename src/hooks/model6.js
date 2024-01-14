import * as THREE from 'three';

  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
  import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  //后处理扩展 
  import { EffectComposer  } from 'three/addons/postprocessing/EffectComposer.js';
  import { RenderPass  } from 'three/addons/postprocessing/RenderPass.js'; //渲染器通道
  import { OutlinePass  } from 'three/addons/postprocessing/OutlinePass.js';

  let camera, scene, renderer, composer, model, outlinePass;

  init();

  function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 2000 );
    camera.position.set( -40, 12, -8 );

    scene = new THREE.Scene();

    const axesHelper = new THREE.AxesHelper(100);
    scene.add(axesHelper);

    const pointLight = new THREE.PointLight(0xffeecc, 1000000, );
    pointLight.position.set(-50, 100, -0);
    scene.add(pointLight);

        // model

        const loader = new GLTFLoader();
        loader.load( './亚运V001_20220516.glb', async function ( gltf ) {

           model = gltf.scene;

          // wait until the model can be added to the scene without blocking due to shader compilation

          // await renderer.compileAsync( model, camera, scene );
          model.traverse((obj) => {
            
            if(obj.isGroup){
              console.log(obj.name);
            }
          })
          scene.add( model );

          render();
           
          
        } );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild( renderer.domElement );


     //创建后处理器 webgl 作为参数
     composer = new EffectComposer(renderer)
    //创建渲染器通道 ，场景 相机作为参数
     const renderPass = new RenderPass(scene, camera)
    // 设置 通道
    composer.addPass(renderPass)
    const v2 = new THREE.Vector2(window.innerWidth,window.innerHeight)
    outlinePass = new OutlinePass(v2,scene,camera)
    outlinePass.visibleEdgeColor.set(0x00ffee)
    outlinePass.edgeThickness = 4
    composer.addPass(outlinePass)
    

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render );
    controls.update();

    window.addEventListener( 'resize', onWindowResize );


  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

    render();

  }
  

  //

  function render() {
    requestAnimationFrame(render)
    // renderer.render( scene, camera );
    composer.render()
  }

  document.getElementById('btn1').addEventListener('click',(e)=>{
    let kt = model.getObjectByName('空调')
    console.log(kt);
    outlinePass.selectedObjects = [kt]
  })