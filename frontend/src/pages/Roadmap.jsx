import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import toast from "react-hot-toast";

function Roadmap() {
    const [user, setUser] = useState({});
    const [meals, setMeals] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [suggestedMeals, setSuggestedMeals] = useState();
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timer, setTimer] = useState(0);  
    const [timerRunning, setTimerRunning] = useState(false);  
    const [weeklyAchievements, setWeeklyAchievements] = useState(0); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setUser(response.data.user);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    // Fetch meals
    useEffect(() => {
        try {
            const fetchMeals = async () => {
                const response = await axios.get('http://localhost:3000/api/meals/getMeals');
                console.log("MEALS: ", response.data.SendMeals);
                setSuggestedMeals(response.data.SendMeals);
            };
            fetchMeals();
        } catch (error) {
            toast.error("Error fetching meals");
            console.log("Error fetching meals:", error);
        }
    }, []);

    let weightLossMeals;
    let weightGainMeals;
    if (suggestedMeals) {
        weightLossMeals = suggestedMeals.filter(meal => meal.dietPlanType === "weightLoss");
        weightGainMeals = suggestedMeals.filter(meal => meal.dietPlanType === "weightGain");
    }

    useEffect(() => {
        const weightLossMeals = [
            { name: "Breakfast", calories: 300, protein: 20, carbs: 30, fat: 10 },
            { name: "Lunch", calories: 400, protein: 30, carbs: 40, fat: 15 },
            { name: "Dinner", calories: 350, protein: 25, carbs: 35, fat: 12 },
        ];

        const weightGainMeals = [
            { name: "Breakfast", calories: 500, protein: 30, carbs: 60, fat: 15 },
            { name: "Lunch", calories: 700, protein: 40, carbs: 80, fat: 20 },
            { name: "Dinner", calories: 600, protein: 35, carbs: 70, fat: 18 },
        ];

        setMeals(user.dietPlan === "weight_loss" ? weightLossMeals : weightGainMeals);

        const mockExercises = [
            { name: "Cardio", duration: 30, caloriesBurned: 300 },
            { name: "Strength Training", duration: 45, caloriesBurned: 200 },
            { name: "Yoga", duration: 60, caloriesBurned: 150 },
        ];
        setExercises(mockExercises);
    }, [user]);

    useEffect(() => {
        let interval;
        if (timerRunning) {
            interval = setInterval(() => {
                setTimer((prev) => prev + 1);
            }, 1000); // Update timer every second
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerRunning]);

    const handleStartStopTimer = () => {
        setTimerRunning((prev) => !prev);
    };

    const handleResetTimer = () => {
        setTimer(0);
    };

    const handleExerciseCompletion = () => {
        setWeeklyAchievements((prev) => prev + 1);
    };

    const dietChartData = meals.map(meal => ({
        name: meal.name,
        calories: meal.calories,
        protein: meal.protein,
        carbs: meal.carbs,
        fat: meal.fat,
    }));

    const openModal = (meal) => {
        setSelectedMeal(meal);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMeal(null);
        setIsModalOpen(false);
    };

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8 rounded-t-3xl mt-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Your {user.dietPlan === "weight_loss" ? "Weight Loss" : "Weight Gain"} Plan</h1>

            <Tabs defaultValue="meals" className="w-full">
                <TabsList>
                    <TabsTrigger value="meals">Daily Meals</TabsTrigger>
                    <TabsTrigger value="exercises">Exercises</TabsTrigger>
                    <TabsTrigger value="chart">Diet Chart</TabsTrigger>
                </TabsList>

                <TabsContent value="meals">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Daily Meals</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Meal</TableHead>
                                        <TableHead>Calories</TableHead>
                                        <TableHead>Protein (g)</TableHead>
                                        <TableHead>Carbs (g)</TableHead>
                                        <TableHead>Fat (g)</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {meals.map((meal, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{meal.name}</TableCell>
                                            <TableCell>{meal.calories}</TableCell>
                                            <TableCell>{meal.protein}</TableCell>
                                            <TableCell>{meal.carbs}</TableCell>
                                            <TableCell>{meal.fat}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <div className="py-10">
                        <h1 className="text-black/80 font-bold text-3xl">Suggested Meals</h1>
                        <div className="flex gap-4 mt-6">
                            {user.dietPlan === "weight_loss" && weightLossMeals && weightLossMeals.map((meal, index) => (
                                <div key={index} className="card image-full w-96 shadow-xl">
                                    <figure>
                                        <img src={meal.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-gray-50">{meal.name}</h2>
                                        <p className="text-white/80">{meal.description}</p>
                                        <div className="card-actions justify-end">
                                            <button
                                                className="btn btn-primary text-white"
                                                onClick={() => openModal(meal)}
                                            >
                                                Recipe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {user.dietPlan === "weight_gain" && weightGainMeals && weightGainMeals.map((meal, index) => (
                                <div key={index} className="card image-full w-96 shadow-xl">
                                    <figure>
                                        <img src={meal.image} alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-gray-50">{meal.name}</h2>
                                        <p className="text-white/80">{meal.description}</p>
                                        <div className="card-actions justify-end">
                                            <button
                                                className="btn btn-primary text-white"
                                                onClick={() => openModal(meal)}
                                            >
                                                Recipe
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="exercises">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recommended Exercises</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Exercise</TableHead>
                                        <TableHead>Duration (minutes)</TableHead>
                                        <TableHead>Calories Burned</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {exercises.map((exercise, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{exercise.name}</TableCell>
                                            <TableCell>{exercise.duration}</TableCell>
                                            <TableCell>{exercise.caloriesBurned}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Timer Section */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold">Exercise Timer</h2>
                        <div className="flex items-center justify-center space-x-4 mt-4">
                            <span className="text-xl">{Math.floor(timer / 60)}:{timer % 60}</span>
                            <button onClick={handleStartStopTimer} className="btn btn-primary">
                            {timerRunning ? "Stop Timer" : "Start Timer"}
                            </button>
                            <button onClick={handleResetTimer} className="btn btn-secondary">Reset Timer</button>
                        </div>
                    </div>

                    {/* Weekly Achievement Section */}
                    <div className="bg-green-100 p-4 rounded-lg text-center">
                        <h2 className="text-lg font-semibold">Weekly Achievement</h2>
                        <p className="text-gray-600">You've completed {weeklyAchievements} exercises this week!</p>
                        <button onClick={handleExerciseCompletion} className="btn btn-success mt-2">
                        Mark Exercise as Complete
                        </button>
                    </div>
                </TabsContent>

                <TabsContent value="chart">
                    <Card>
                        <CardHeader>
                            <CardTitle>Diet Chart</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={400}>
                                <BarChart data={dietChartData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="calories" fill="#8884d8" />
                                    <Bar dataKey="protein" fill="#82ca9d" />
                                    <Bar dataKey="carbs" fill="#ffc658" />
                                    <Bar dataKey="fat" fill="#ff8042" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Modal */}
            {isModalOpen && selectedMeal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 max-w-md">
                        <h2 className="text-xl font-bold mb-4">{selectedMeal.name} Recipe</h2>
                        <img src={selectedMeal.image} alt={selectedMeal.name} className="w-full h-64 object-cover rounded mb-4" />
                        <p>{selectedMeal.recipe}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Roadmap;
