
        if (matterContainer) {

            const thickness = 60;

            // module aliases
            var Engine = Matter.Engine
              , Render = Matter.Render
              , Runner = Matter.Runner
              , Bodies = Matter.Bodies
              , Composite = Matter.Composite;

            Body = Matter.Body,
            Svg = Matter.Svg,
            Vector = Matter.Vector,
            Vertices = Matter.Vertices;

            // create an engine
            var engine = Engine.create();
            engine.gravity.y = 0.3
            engine.gravity.x = 0

            // create a renderer
            var render = Render.create({
                element: matterContainer,
                engine: engine,
                options: {
                    width: matterContainer.clientWidth,
                    height: matterContainer.clientHeight,
                    background: "transparent",
                    wireframes: false,
                    showAngleIndicator: false
                }
            });

            var ground = Bodies.rectangle(matterContainer.clientWidth / 2, matterContainer.clientHeight + thickness / 2, matterContainer.clientWidth, thickness, {
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            });

            var topWall = Bodies.rectangle(matterContainer.clientWidth / 2, 0 - thickness / 2, matterContainer.clientWidth, thickness, {
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            });

            var leftWall = Bodies.rectangle(0 - thickness / 2, matterContainer.clientHeight / 2, thickness, matterContainer.clientHeight * 5, {
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            });

            var rightWall = Bodies.rectangle(matterContainer.clientWidth + thickness / 2, matterContainer.clientHeight / 2, thickness, matterContainer.clientHeight * 5, {
                isStatic: true,
                render: {
                    fillStyle: "transparent",
                }
            });

            // add all of the bodies to the world

            Composite.add(engine.world, [ground, topWall, leftWall, rightWall]);

            createWords(281, 85, "/wp-content/uploads/review-bubble-fantastic.svg", 2);
            createWords(264, 85, "/wp-content/uploads/review-bubble-wow.svg", 2);
            createWords(307, 85, "/wp-content/uploads/review-bubble-amazing.svg", 2);
            createWords(275, 85, "/wp-content/uploads/review-bubble-awesome.svg", 2);
            createWords(279, 85, "/wp-content/uploads/review-bubble-beautiful.svg", 2);
            createWords(241, 85, "/wp-content/uploads/review-bubble-boom.svg", 2);
            createWords(278, 85, "/wp-content/uploads/review-bubble-incredible.svg", 2);
            createWords(239, 85, "/wp-content/uploads/review-bubble-insane.svg", 2);
            createWords(343, 85, "/wp-content/uploads/review-bubble-mind-blowing.svg", 2);
            createWords(302, 85, "/wp-content/uploads/review-bubble-next-level.svg", 2);
            createWords(259, 85, "/wp-content/uploads/review-bubble-perfect.svg", 2);
            createWords(229, 85, "/wp-content/uploads/review-bubble-super.svg", 2);

            let mouse = Matter.Mouse.create(render.canvas);
            let mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.006,
                    render: {
                        visible: false
                    }
                }
            })

            Composite.add(engine.world, mouseConstraint)

            // allow scroll through the canvas
            mouseConstraint.mouse.element.removeEventListener('mousewheel', mouseConstraint.mouse.mousewheel)
            mouseConstraint.mouse.element.removeEventListener('DOMMouseScroll', mouseConstraint.mouse.mousewheel)

            // window on scroll jump
            document.addEventListener('wheel', (e)=>{
                let speed = checkScrollSpeed();
                let force = speed * 0.001;
                //console.log(force);
                let allBodies = Composite.allBodies(engine.world);
                allBodies.forEach((body)=>{
                    if (body.isStatic === true)
                        return;
                    Body.applyForce(body, {
                        x: body.position.x,
                        y: body.position.y
                    }, {
                        x: 0,
                        y: force
                    });
                }
                )
            }
            )

            // run the engine
            var matterElInView = false;
            const callback = (entries,observer)=>{
                entries.forEach(entry=>{
                    if (entry.isIntersecting && !matterElInView) {

                        // Element is in view
                        matterElInView = true;

                        // run the renderer
                        Render.run(render);

                        // create runner
                        var runner = Runner.create();
                        Runner.run(runner, engine);

                        //console.log(engine, render);

                        //console.log('Element is now visible in the viewport');
                    }
                }
                );
            }
            ;

            const options = {
                root: null,
                // use the viewport as the root element
                threshold: 0.1 // 50% of the element visible in the viewport triggers the callback
            };

            const observer = new IntersectionObserver(callback,options);
            observer.observe(matterContainer);

            addEventListener("DOMContentLoaded", (event)=>{//console.log(engine, render);
            }
            );

            function createWords(width, height, texture, quantity) {

                if (window.matchMedia("(max-width: 786px)").matches) {
                    quantity = 1;
                }

                for (let i = 1; i <= quantity; i++) {
                    let scaleFactorMin = 0.7;
                    let scaleFactorMax = 0.7;
                    let scaleFactor = Math.random() * (scaleFactorMax - scaleFactorMin) + scaleFactorMin;

                    let rotateMin = 0;
                    let rotateMax = 40;
                    let mainRotate = Math.random() * (rotateMax - rotateMin) + rotateMin;

                    let ratio = (matterContainer.clientWidth - 200) / (1400 - 200);
                    let interpolatedValue = (1 - 0.6) * ratio + 0.6;
                    scaleFactor = scaleFactor * interpolatedValue;

                    let forceMin = -0.09;
                    let forceMax = 0.09;
                    let mainForceX = Math.random() * (forceMax - forceMin) + forceMin;
                    let mainForceY = Math.random() * (forceMax - forceMin) + forceMin;

                    //console.log(dataURI);

                    var generatedWord = Bodies.rectangle(getRandomPositionInView().x, getRandomPositionInView().y, width * scaleFactor, height * scaleFactor, {
                        render: {
                            sprite: {
                                texture: texture,
                                xScale: scaleFactor,
                                yScale: scaleFactor,
                                xOffset: 0,
                                yOffset: 0,
                            }
                        },
                        restitution: el_restitution,
                        friction: el_friction,
                        frictionAir: 0.0001,
                    })

                    Composite.add(engine.world, generatedWord);
                    Body.setAngle(generatedWord, mainRotate);
                    Body.applyForce(generatedWord, {
                        x: generatedWord.position.x,
                        y: generatedWord.position.y
                    }, {
                        x: mainForceX,
                        y: mainForceY
                    })

                }

            }

            function scaleBodies() {
                const allBodies = Composite.allBodies(engine.world);

                allBodies.forEach((body)=>{
                    if (body.isStatic === true)
                        return;
                    const {min, max} = body.bounds;
                    const bodyWidth = max.x - min.x;
                    let scaleFactor = (matterContainer.clientWidth * SVG_WIDTH_PERCENT / bodyWidth)
                    Body.scale(body, scaleFactor, scaleFactor);
                }
                )
            }

            function handleResize(container) {
                //console.log('resized');
                Engine.update(engine);
                render.bounds.max.x = container.clientWidth;
                render.bounds.max.y = container.clientHeight;
                render.options.width = container.clientWidth;
                render.options.height = container.clientHeight;
                render.canvas.width = container.clientWidth;
                render.canvas.height = container.clientHeight;
                Matter.Render.setPixelRatio(render, window.devicePixelRatio);
                // added this

                Matter.Body.setPosition(ground, Matter.Vector.create(container.clientWidth / 2, container.clientHeight + thickness / 2))

                Matter.Body.setPosition(rightWall, (Matter.Vector.create(container.clientWidth + thickness / 2, container.clientHeight / 2)))

                //scaleBodies();
            }

            window.addEventListener("resize", ()=>handleResize(matterContainer))

            function getRandomPositionInView() {
                let matterContainer = document.querySelector('.review_anim_box');
                let rect = matterContainer.getBoundingClientRect();
                const viewportWidth = matterContainer.clientWidth;
                const viewportHeight = matterContainer.clientHeight;
                const scrollX = window.pageXOffset;
                const scrollY = window.pageYOffset;

                const minX = 0;
                const maxX = 0 + viewportWidth;
                const minY = 0;
                const maxY = 0 + viewportHeight;

                const randomX = Math.random() * (maxX - minX) + minX;
                const randomY = Math.random() * (maxY - minY) + minY;

                return {
                    x: randomX,
                    y: randomY
                };
            }

            const checkScrollSpeed = (function(settings) {
                settings = settings || {};

                let lastPos, newPos, timer, delta, delay = settings.delay || 50;

                function clear() {
                    lastPos = null;
                    delta = 0;
                }

                clear();

                return function() {
                    newPos = window.scrollY;
                    if (lastPos != null) {
                        // && newPos < maxScroll
                        delta = newPos - lastPos;
                    }
                    lastPos = newPos;
                    clearTimeout(timer);
                    timer = setTimeout(clear, delay);
                    return delta;
                }
                ;
            }
            )();

        }
    </script>
