import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"; // Assuming you have a Dialog component.

function Blogs() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const blogPosts = [
        {
            id: 1,
            title: "10 Essential Exercises for a Full Body Workout",
            excerpt: "Discover the key exercises that target all major muscle groups for an effective full-body workout routine.",
            author: "Jane Doe",
            date: "2023-06-15",
            readTime: "5 min read",
            imageUrl: "https://img.freepik.com/free-photo/man-working-out-gym_23-2148197777.jpg",
            category: "Strength Training",
            describe: `
1.Squats: A fundamental lower body exercise that targets the quads, hamstrings, glutes, and core. Squats improve leg strength, stability, and mobility, making them an essential part of any full-body workout.

2.Push-Ups: A bodyweight exercise that works the chest, shoulders, triceps, and core. Push-ups are great for upper body strength and can be modified for all fitness levels.

3.Lunges: This lower body exercise targets the quads, hamstrings, and glutes while improving balance and coordination. Lunges can be done forward, backward, or laterally.

4.Planks: A core-focused exercise that strengthens the abs, back, and shoulders. Planks also improve overall stability and posture.

5.Deadlifts: A compound movement that engages the entire posterior chain, including the hamstrings, glutes, lower back, and core. Deadlifts help build strength and power.

6.Burpees: A full-body exercise combining a squat, push-up, and jump, which is great for building cardiovascular endurance and burning fat. Burpees work the chest, arms, legs, and core.

7.Mountain Climbers: A dynamic exercise that targets the core while also working the shoulders, arms, and legs. Mountain climbers are great for improving cardiovascular fitness and overall strength.

8.Jumping Jacks: A simple but effective full-body movement that gets the heart rate up and works the legs, core, and arms. Jumping jacks are great for warming up and increasing agility.

9.Bicep Curls: Using dumbbells or resistance bands, this exercise isolates the biceps to build arm strength and definition.

10.Russian Twists: A core exercise that targets the obliques and helps improve rotational strength. Russian twists can be done with or without weights.
`
        },
        {
            id: 2,
            title: "The Ultimate Guide to Meal Prepping for Fitness Success",
            excerpt: "Learn how to efficiently plan and prepare your meals to support your fitness goals and save time.",
            author: "John Smith",
            date: "2023-06-10",
            readTime: "5 min read",
            imageUrl: "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg",
            category: "Nutrition",
            describe: `
Meal prepping is a powerful tool for achieving fitness goals, whether you're looking to lose weight, build muscle, or maintain a healthy lifestyle. 

It saves time, ensures you have nutritious meals on hand, and helps you avoid unhealthy, last-minute food choices. Start by setting clear goals and tailoring your meals to your needs—prioritize lean proteins like chicken or tofu, complex carbs like quinoa or sweet potatoes, and healthy fats like avocados or nuts. 

Plan a weekly menu with variety, such as overnight oats for breakfast, grilled chicken with quinoa for lunch, and salmon with roasted vegetables for dinner. Dedicate a few hours each week to batch-cook and portion your meals, storing them in labeled containers for easy access. 

By controlling ingredients, portion sizes, and cooking methods, meal prepping ensures you stay consistent with your nutrition while saving money and reducing stress, making it an essential part of your fitness journey.
`
        },
        {
            id: 3,
            title: "5 Yoga Poses to Improve Flexibility and Reduce Stress",
            excerpt: "Incorporate these simple yoga poses into your routine to enhance flexibility and manage stress levels.",
            author: "Emily Chen",
            date: "2023-06-05",
            readTime: "6 min read",
            imageUrl: "https://img.freepik.com/free-vector/silhouette-female-yoga-pose-against-mandala-design_1048-13082.jpg",
            category: "Yoga",
            describe: `
Yoga is a fantastic way to enhance flexibility, reduce stress, and improve overall well-being. By incorporating specific poses into your daily routine, you can target tight muscles, release tension, and achieve a sense of calm. Whether you're a beginner or a seasoned yogi, these poses can help you create a balanced mind and body.

Start with Child's Pose (Balasana) to gently stretch your lower back, hips, and thighs while promoting relaxation. 
Follow with Downward Dog (Adho Mukha Svanasana) to lengthen your spine, stretch your hamstrings, and release tension from your shoulders. 
For deeper flexibility, try Standing Forward Bend (Uttanasana), which helps loosen tight hamstrings and calves.

Next, practice Cat-Cow Pose (Marjaryasana-Bitilasana) to improve spinal mobility and relieve stress from your neck and back. 
End your session with Seated Forward Bend (Paschimottanasana), a calming pose that stretches the entire backside of your body and helps ease your mind.

Incorporating these poses into your yoga practice can bring incredible benefits, both physically and mentally. 
Dedicate a few minutes each day to these stretches, breathe deeply, and enjoy the transformative effects they bring to your flexibility, stress levels, and overall health.
`
        },
        {
            id: 4,
            title: "High-Intensity Interval Training: Maximize Results in Minimal Time",
            excerpt: "Explore the benefits of HIIT workouts and how to incorporate them into your fitness routine for efficient fat burning.",
            author: "Mike Johnson",
            date: "2023-05-30",
            readTime: "7 min read",
            imageUrl: "https://img.freepik.com/free-photo/woman-man-treadmills_1262-408.jpg",
            category: "Cardio",
            describe:`
High-Intensity Interval Training (HIIT) is a powerful workout method that alternates between short bursts of intense activity and brief rest periods, providing numerous benefits for fat burning and overall fitness. Unlike steady-state cardio, HIIT keeps your heart rate elevated, leading to more calories burned in less time, making it an efficient fat-burning workout. 

One of the key advantages of HIIT is the afterburn effect, also known as excess post-exercise oxygen consumption (EPOC), which means your body continues to burn calories even after the workout is over. HIIT also improves cardiovascular health, builds endurance, and can be customized to target various fitness goals, whether it's fat loss, muscle toning, or overall conditioning. 

You can incorporate HIIT into your fitness routine by starting with simple exercises like jumping jacks, squats, burpees, or sprints, and gradually increasing intensity as you build stamina. 

Ideally, HIIT sessions last between 15 to 30 minutes, making it an efficient option for those with busy schedules. With its versatility and effectiveness, HIIT is a great addition to any fitness routine, helping you achieve faster results in a fraction of the time.
`
        },
        {
            id: 5,
            title: "The Importance of Rest and Recovery in Your Fitness Journey",
            excerpt: "Understand why rest days are crucial for muscle growth, injury prevention, and overall fitness progress.",
            author: "Sarah Thompson",
            date: "2023-05-25",
            readTime: "4 min read",
            imageUrl: "https://img.freepik.com/free-vector/early-morning-concept-illustration_114360-7352.jpg",
            category: "Recovery",
            describe:`
Rest days are crucial for muscle growth, injury prevention, and overall fitness progress. When you exercise, especially during strength training or intense workouts, your muscles experience small tears that need time to repair and grow stronger. Without sufficient rest, muscles don’t recover fully, leading to stalled progress, overtraining, and a higher risk of injury. 
Rest also helps reduce muscle fatigue, giving your joints and tendons a break, and allows the nervous system to recover, ensuring proper form in future workouts.

Mentally, rest days prevent burnout, helping maintain motivation and focus. Overtraining can lead to mental fatigue and a decrease in enthusiasm for exercise. Additionally, rest helps regulate hormones like cortisol, which, when elevated from constant training, can impede muscle recovery. 
Taking rest days promotes a balanced hormonal profile, optimizing muscle repair and growth. Listening to your body and incorporating rest helps avoid overuse injuries, ensuring long-term progress in your fitness journey.
`
        }
    ];

    const featuredPost = blogPosts[0];
    const recentPosts = blogPosts.slice(1);

    const openModal = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    return (
        <div className="min-h-screen">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {/* Featured Post */}
                <FeaturedPost post={featuredPost} openModal={openModal} />

                {/* Recent Posts */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentPosts.map((post) => (
                            <BlogPostCard key={post.id} post={post} openModal={openModal} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal */}
            {selectedPost && (
            <Dialog open={isModalOpen} onOpenChange={closeModal}>
                <DialogContent className="max-h-screen overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{selectedPost.title}</DialogTitle>
                    </DialogHeader>
                <div>
                    <img
                        src={selectedPost.imageUrl}
                        alt={selectedPost.title}
                        className="w-full h-64 object-cover mb-4 rounded-lg"
                    />
                    <Badge variant="secondary" className="mb-4">{selectedPost.category}</Badge>
                    <p className="mb-4 text-gray-600">{selectedPost.excerpt}</p>
                    <p className="text-gray-800">{`By ${selectedPost.author} on ${selectedPost.date}`}</p>
                    <p className="text-gray-800 mt-2">{`Read Time: ${selectedPost.readTime}`}</p>
                    <p className="text-gray-800 mt-2 whitespace-pre-wrap">{`${selectedPost.describe}`}</p>
                </div>
                <Button onClick={closeModal} variant="outline" className="mt-6">Close</Button>
                </DialogContent>
           </Dialog>
        )}

        </div>
    );
}

export default Blogs;

function FeaturedPost({ post, openModal }) {
    return (
        <Card className="w-full">
            <CardContent className="p-0">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={post.imageUrl} alt={post.title} />
                    </div>
                    <div className="p-8">
                        <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                        <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                        <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                        <div className="mt-4 flex items-center">
                            <Avatar className="h-10 w-10">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} />
                                <AvatarFallback>{post.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <div className="flex space-x-1 text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span aria-hidden="true">&middot;</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="mr-1 h-4 w-4" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <Button onClick={() => openModal(post)} variant="outline" size="sm">Read More</Button>
            </CardFooter>
        </Card>
    );
}


function BlogPostCard({ post, openModal }) {
    return (
        <Card>
            <CardHeader className="p-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
            </CardHeader>
            <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription className="mt-2 line-clamp-2">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="mr-1 h-4 w-4" />
                        <span>{post.readTime}</span>
                    </div>
                </div>
                <Button onClick={() => openModal(post)} variant="outline" size="sm">Read More</Button>
            </CardFooter>
        </Card>
    );
}
