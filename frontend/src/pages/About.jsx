import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function About() {
    const teamMembers = [
        {
            name: "S.M Sajidur Rahman",
            id: "21301130",
            uni:"Brac University"
        },
        {
            name: "Rifa Tasnim",
            id: "21301565",
            uni:"Brac University"
        },
        {
            name: "Suha Parisa",
            id: "2130",
            uni:"Brac University"
        },
        {
            name: "Parizat",
            id: "2130",
            uni:"Brac University"
        }
    ];

    return (
        <div className="min-h-screen max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Card className="p-6 bg-white bg-opacity-50 shadow-lg backdrop-blur-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">About This Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 mb-6">
                        This project was created as a collaborative effort for the CSE470 project. Meet the members behind this initiative:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-600">{member.id}</p>
                                <p className="text-sm text-gray-600">{member.uni}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default About;
