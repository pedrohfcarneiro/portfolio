I've made my own Particle System and it was incredible!  

I was inspired by a video from an ex-blizzard dev, that talked about modern approaches and optimizations for his Particle System, and i decided i would make my own.  

At work, we use WebGL to build Playable Ads, so i chose to implement my partSys using this API.  

To achieve a scalable system with great performance, even for stone age mobiles, i joined some well-thought abstraction and optimization rendering techniques:  

🎆 Data Layout: Structure of Arrays (SoA) vs Array of Structures (AoS)  
🎆 Instanced Rendering  
🎆 Frustum culling for particle batches  
🎆 Particle pooling  
🎆 Particle integration updates running in GPU using Transform Feedback. (GPGPU technique for WebGL2)  
🎆Delta modifiers abstraction for per-particle complex behaviour.  

The results were very promising and i added a short demonstration video here.  
I'm looking forward to improve the system even more, with WebGPU, parallelization and other cool stuff.  

Here's the video i mentioned at the beginning, the dev is amazing and is building his own engine, go check his work: https://www.youtube.com/watch?v=ahOfNgvQ93Q

## Showcase Build

<iframe src="/portfolio/studyProjectsAssets/ParticleSystem/showcase_build.html" width="100%" height="600px" frameborder="0" allowfullscreen></iframe>  <br>
<br>

This project overview is under construction, soon i'll update with more details of the development process.

