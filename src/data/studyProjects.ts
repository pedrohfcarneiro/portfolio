

export interface StudyProjectInterface {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    coverImage: string;
    relatedPosts: string[];
}

export const studyProjects: StudyProjectInterface[] = [
    {
        id: "particleSystem",
        name: "WebGL Particle System",
        description: "Hand crafted Particle System using WebGL2",
        thumbnail: "/studyProjectsAssets/ParticleSystem/thumbnail_gif.gif",
        coverImage: "/studyProjectsAssets/ParticleSystem/coverImage.jpg",
        relatedPosts: ["work in progress"],
    },
];