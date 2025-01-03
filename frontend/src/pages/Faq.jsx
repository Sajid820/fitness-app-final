import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 
const FAQ = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Card className="p-6 bg-white bg-opacity-50 shadow-lg backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="collapse collapse-plus border border-base-300 rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-semibold">
                What is this website about?
              </div>
              <div className="collapse-content">
                <p>
                  This website offers fitness planning resources, workout routines, meal prep advice, and a blog with articles on health and fitness. It’s designed to help users plan and manage their fitness journey while staying informed through educational blog posts.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-semibold">
                How do I use the fitness planner?
              </div>
              <div className="collapse-content">
                <p>
                  Our fitness planner allows you to create personalized workout routines based on your goals and fitness level. Simply sign up, input your preferences, and get started with a customized plan that will help you track your progress.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-semibold">
                Can I read fitness blogs on this site?
              </div>
              <div className="collapse-content">
                <p>
                  Yes! We feature a variety of blog posts covering topics like strength training, yoga, nutrition, and recovery. Our articles are designed to provide valuable insights, tips, and inspiration to support your fitness journey.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-semibold">
                Is the website free to use?
              </div>
              <div className="collapse-content">
                <p>
                  Yes, the website is free to use! You can access all the fitness planning tools, blog posts, and resources without any cost. We aim to make fitness accessible for everyone.
                </p>
              </div>
            </div>

            <div className="collapse collapse-plus border border-base-300 rounded-box">
              <input type="checkbox" className="peer" />
              <div className="collapse-title text-xl font-semibold">
                How can I get in touch if I have more questions?
              </div>
              <div className="collapse-content">
                <p>
                  If you have any additional questions or need assistance, you can contact us through the "Contact Us" page or email us at support@fitnesswebsite.com. We’re here to help!
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQ;
