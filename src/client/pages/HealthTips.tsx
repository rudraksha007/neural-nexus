
import { useState } from "react";
import {
  Bed,
  Dumbbell,
  Apple,
  Stethoscope,
  Heart,
  Brain,
  Pill,
  Clock
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HealthTips = () => {
  const categories = [
    {
      id: "sleep",
      label: "Sleep",
      icon: Bed,
      tips: [
        "Maintain a consistent sleep schedule",
        "Aim for 7-9 hours of sleep per night",
        "Create a relaxing bedtime routine",
        "Keep your bedroom cool, dark, and quiet",
        "Avoid screens before bedtime"
      ]
    },
    {
      id: "exercise",
      label: "Exercise",
      icon: Dumbbell,
      tips: [
        "Get at least 150 minutes of moderate exercise per week",
        "Include both cardio and strength training",
        "Take regular breaks from sitting",
        "Start slowly and gradually increase intensity",
        "Find activities you enjoy to stay motivated"
      ]
    },
    {
      id: "diet",
      label: "Diet",
      icon: Apple,
      tips: [
        "Eat a variety of colorful fruits and vegetables",
        "Choose whole grains over refined grains",
        "Limit processed foods and added sugars",
        "Stay hydrated with water throughout the day",
        "Practice portion control"
      ]
    },
    {
      id: "medical",
      label: "Medical Care",
      icon: Stethoscope,
      tips: [
        "Schedule regular check-ups with your doctor",
        "Keep up with recommended screenings",
        "Monitor your blood pressure regularly",
        "Stay current with vaccinations",
        "Maintain medical records"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16">
        <section className="bg-gradient-to-b from-green-50 to-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Personalized Health Tips
              </h1>
              <p className="text-xl text-gray-600">
                Expert recommendations for maintaining a healthy lifestyle and preventing
                lifestyle diseases.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <Tabs defaultValue="sleep" className="space-y-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <category.icon className="w-5 h-5 text-green-600" />
                          {category.label} Recommendations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {category.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-5 h-5 mt-1 flex-shrink-0">
                                <div className="w-2 h-2 bg-green-600 rounded-full" />
                              </div>
                              <span className="text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="w-5 h-5 text-green-600" />
                          Why It Matters
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose">
                        <p className="text-gray-600">
                          Following these {category.label.toLowerCase()} guidelines can help:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li>Reduce risk of lifestyle diseases</li>
                          <li>Improve overall well-being</li>
                          <li>Enhance daily energy levels</li>
                          <li>Promote better long-term health</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HealthTips;
