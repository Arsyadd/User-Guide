import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle, Circle, PlayCircle, BookOpen, ChevronRight, Download, Lock, Info, Shield, UserCircle2, BookCheck, Video, AlertCircle, Rocket, GraduationCap, ArrowRight } from 'lucide-react';

interface Step {
  id: number;
  text: string;
  completed: boolean;
  description: string;
  validation?: string[];
}

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  date?: string;
  documents?: {
    name: string;
    description: string;
  }[];
  steps: Step[];
  requiredTaskId?: number;
}

interface Section {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  tasks: Task[];
  totalTasks: number;
  completedTasks: number;
  locked: boolean;
  requiredSectionId?: number;
}

function App() {
  const [currentSection, setCurrentSection] = useState(1);
  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: "Getting Started",
      icon: <Rocket className="w-6 h-6" />,
      description: "Complete these essential steps to set up your account and get familiar with the platform.",
      totalTasks: 4,
      completedTasks: 0,
      locked: false,
      tasks: [
        {
          id: 1,
          title: "Set up your profile",
          description: "Create your personal profile to get the most out of our platform. This is the first step in personalizing your experience.",
          completed: false,
          locked: false,
          steps: [
            { 
              id: 1, 
              text: "Upload a profile picture",
              completed: false,
              description: "Choose a professional photo that clearly shows your face. The image should be at least 400x400 pixels.",
              validation: [
                "Image must be in JPG, PNG, or GIF format",
                "Maximum file size: 5MB",
                "Minimum dimensions: 400x400 pixels"
              ]
            },
            { 
              id: 2, 
              text: "Fill in your basic information",
              completed: false,
              description: "Provide your full name, job title, department, and contact information. This information will be visible to your team members.",
              validation: [
                "Full name is required",
                "Valid company email address",
                "Current job title",
                "Department selection"
              ]
            },
            { 
              id: 3, 
              text: "Set your preferences",
              completed: false,
              description: "Configure your notification preferences, timezone, and language settings. These can be updated later from your settings page.",
              validation: [
                "Select preferred language",
                "Set timezone",
                "Configure notification preferences",
                "Choose display settings"
              ]
            }
          ],
          documents: [
            {
              name: "profile_setup_guide.pdf",
              description: "Detailed guide on creating an effective professional profile"
            }
          ]
        },
        {
          id: 2,
          title: "Security setup",
          description: "Enhance your account security with additional protection measures. This step is crucial for maintaining the safety of your account.",
          completed: false,
          locked: true,
          requiredTaskId: 1,
          steps: [
            { 
              id: 1, 
              text: "Set up two-factor authentication",
              completed: false,
              description: "Enable 2FA using either an authenticator app or SMS verification. This adds an extra layer of security to your account.",
              validation: [
                "Choose authentication method",
                "Install authenticator app if selected",
                "Verify backup codes",
                "Test 2FA login"
              ]
            },
            { 
              id: 2, 
              text: "Review security best practices",
              completed: false,
              description: "Read through our security guidelines and understand the importance of maintaining strong security practices.",
              validation: [
                "Read security documentation",
                "Complete security quiz",
                "Acknowledge security policies"
              ]
            },
            { 
              id: 3, 
              text: "Configure backup email",
              completed: false,
              description: "Add a secondary email address for account recovery purposes. This email should be different from your primary account email.",
              validation: [
                "Enter backup email",
                "Verify backup email",
                "Set recovery questions"
              ]
            }
          ],
          documents: [
            {
              name: "security_guide.pdf",
              description: "Comprehensive security guidelines and best practices"
            },
            {
              name: "2fa_setup.pdf",
              description: "Step-by-step guide for setting up two-factor authentication"
            }
          ]
        },
        {
          id: 3,
          title: "Platform orientation",
          description: "Learn about the key features and navigation of our platform. This will help you make the most of the available tools.",
          completed: false,
          locked: true,
          requiredTaskId: 2,
          steps: [
            { 
              id: 1, 
              text: "Watch the welcome video",
              completed: false,
              description: "A 5-minute introduction to the platform's main features and benefits.",
              validation: [
                "Watch complete video",
                "Mark key features noted",
                "Complete video quiz"
              ]
            },
            { 
              id: 2, 
              text: "Complete feature tour",
              completed: false,
              description: "Interactive walkthrough of the platform's key features and functionality.",
              validation: [
                "Visit all main sections",
                "Try sample actions",
                "Complete tour quiz"
              ]
            },
            { 
              id: 3, 
              text: "Try the practice exercises",
              completed: false,
              description: "Hands-on exercises to familiarize yourself with common tasks and workflows.",
              validation: [
                "Complete basic tasks",
                "Try advanced features",
                "Submit practice results"
              ]
            }
          ],
          documents: [
            {
              name: "platform_guide.pdf",
              description: "Detailed platform documentation and feature guide"
            }
          ]
        },
        {
          id: 4,
          title: "Complete verification",
          description: "Verify your account to unlock all features. This final step ensures compliance with our security policies.",
          completed: false,
          locked: true,
          requiredTaskId: 3,
          steps: [
            { 
              id: 1, 
              text: "Verify email address",
              completed: false,
              description: "Confirm your email address by clicking the verification link sent to your inbox.",
              validation: [
                "Check email inbox",
                "Click verification link",
                "Confirm verification"
              ]
            },
            { 
              id: 2, 
              text: "Review terms of service",
              completed: false,
              description: "Read and understand our terms of service and data usage policies.",
              validation: [
                "Read full document",
                "Acknowledge key points",
                "Accept terms"
              ]
            },
            { 
              id: 3, 
              text: "Accept user agreement",
              completed: false,
              description: "Review and accept the user agreement to complete your account setup.",
              validation: [
                "Review agreement",
                "Accept conditions",
                "Complete verification"
              ]
            }
          ],
          documents: [
            {
              name: "verification_steps.pdf",
              description: "Guide to completing account verification"
            },
            {
              name: "terms_of_service.pdf",
              description: "Complete terms of service documentation"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Learning Resources",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Access comprehensive learning materials to master our platform.",
      totalTasks: 3,
      completedTasks: 0,
      locked: true,
      requiredSectionId: 1,
      tasks: [
        {
          id: 5,
          title: "Watch tutorial videos",
          description: "Learn through our comprehensive video series covering basic to advanced topics.",
          completed: false,
          locked: false,
          steps: [
            { 
              id: 1, 
              text: "Basic features overview",
              completed: false,
              description: "Introduction to fundamental platform features and concepts.",
              validation: [
                "Complete basic tutorials",
                "Pass feature quiz",
                "Practice basic operations"
              ]
            },
            { 
              id: 2, 
              text: "Advanced techniques",
              completed: false,
              description: "Deep dive into advanced platform capabilities and workflows.",
              validation: [
                "Watch advanced tutorials",
                "Complete exercises",
                "Submit practice project"
              ]
            },
            { 
              id: 3, 
              text: "Tips and tricks",
              completed: false,
              description: "Learn productivity tips and shortcuts from expert users.",
              validation: [
                "Review all tips",
                "Try shortcuts",
                "Complete efficiency quiz"
              ]
            }
          ]
        },
        {
          id: 6,
          title: "Read documentation",
          description: "Access detailed platform documentation and guides for in-depth learning.",
          completed: false,
          locked: true,
          requiredTaskId: 5,
          steps: [
            { 
              id: 1, 
              text: "Review getting started guide",
              completed: false,
              description: "Comprehensive introduction to platform basics.",
              validation: [
                "Read full guide",
                "Complete exercises",
                "Pass knowledge check"
              ]
            },
            { 
              id: 2, 
              text: "Study advanced topics",
              completed: false,
              description: "Detailed documentation on advanced features and use cases.",
              validation: [
                "Review documentation",
                "Try examples",
                "Complete assessment"
              ]
            }
          ],
          documents: [
            {
              name: "user_manual.pdf",
              description: "Complete platform user manual"
            },
            {
              name: "quick_tips.pdf",
              description: "Collection of helpful tips and shortcuts"
            }
          ]
        },
        {
          id: 7,
          title: "Practice exercises",
          description: "Complete hands-on exercises to reinforce your learning and build confidence.",
          completed: false,
          locked: true,
          requiredTaskId: 6,
          steps: [
            { 
              id: 1, 
              text: "Basic exercises",
              completed: false,
              description: "Fundamental practice scenarios for core features.",
              validation: [
                "Complete all exercises",
                "Submit results",
                "Review feedback"
              ]
            },
            { 
              id: 2, 
              text: "Advanced scenarios",
              completed: false,
              description: "Complex scenarios testing advanced feature knowledge.",
              validation: [
                "Attempt scenarios",
                "Document solutions",
                "Get instructor review"
              ]
            }
          ],
          documents: [
            {
              name: "exercise_guide.pdf",
              description: "Structured practice exercises with solutions"
            }
          ]
        }
      ]
    }
  ]);

  const handleStepComplete = (sectionId: number, taskId: number, stepId: number) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        const updatedTasks = section.tasks.map(task => {
          if (task.id === taskId) {
            const updatedSteps = task.steps.map(step => 
              step.id === stepId ? { ...step, completed: !step.completed } : step
            );
            
            const allStepsCompleted = updatedSteps.every(step => step.completed);
            
            return {
              ...task,
              steps: updatedSteps,
              completed: allStepsCompleted
            };
          }
          return task;
        });

        const tasksWithUnlocking = updatedTasks.map(task => {
          if (task.locked && task.requiredTaskId) {
            const requiredTask = updatedTasks.find(t => t.id === task.requiredTaskId);
            if (requiredTask && requiredTask.completed) {
              return {
                ...task,
                locked: false
              };
            }
          }
          return task;
        });

        const completedTasks = tasksWithUnlocking.filter(task => task.completed).length;
        const allTasksCompleted = completedTasks === section.totalTasks;

        return {
          ...section,
          tasks: tasksWithUnlocking,
          completedTasks
        };
      }
      return section;
    }));

    setSections(prevSections => {
      const currentSection = prevSections.find(s => s.id === sectionId);
      if (currentSection && currentSection.completedTasks === currentSection.totalTasks) {
        return prevSections.map(section => {
          if (section.locked && section.requiredSectionId === sectionId) {
            return {
              ...section,
              locked: false
            };
          }
          return section;
        });
      }
      return prevSections;
    });
  };

  const handleNextSection = () => {
    const currentSectionData = sections.find(s => s.id === currentSection);
    if (currentSectionData && currentSectionData.completedTasks === currentSectionData.totalTasks) {
      const nextSection = sections.find(s => s.id === currentSection + 1);
      if (nextSection && !nextSection.locked) {
        setCurrentSection(currentSection + 1);
      }
    }
  };

  const currentSectionData = sections.find(s => s.id === currentSection);
  const isCurrentSectionComplete = currentSectionData?.completedTasks === currentSectionData?.totalTasks;
  const nextSection = sections.find(s => s.id === currentSection + 1);
  const canProceed = isCurrentSectionComplete && nextSection && !nextSection.locked;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 sm:mb-4">Welcome to Your Journey!</h1>
          <p className="text-base sm:text-lg text-blue-600">Follow this guide to get started with our platform</p>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {sections
              .filter(section => section.id === currentSection)
              .map((section) => (
                <div 
                  key={section.id} 
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 rounded-full bg-blue-100">
                          {section.icon}
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h2>
                          <p className="text-sm text-gray-600 mt-1">{section.description}</p>
                        </div>
                      </div>
                      <div className="bg-blue-50 px-4 py-2 rounded-full self-start sm:self-center">
                        <span className="text-blue-700 font-medium text-sm">
                          {section.completedTasks} of {section.totalTasks} completed
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {section.tasks.map((task) => (
                        <div 
                          key={task.id} 
                          className={`border rounded-lg p-3 sm:p-4 transition-all duration-200 ${
                            task.locked 
                              ? 'bg-gray-50' 
                              : task.completed 
                                ? 'bg-green-50 border-green-100' 
                                : 'bg-white border-gray-100 hover:bg-blue-50'
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start">
                            <div className="flex items-start flex-shrink-0">
                              <div className="mt-1 mr-3">
                                {task.locked ? (
                                  <Lock className="w-5 h-5 text-gray-400" />
                                ) : task.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Circle className="w-5 h-5 text-blue-300" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                                  <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                                  {task.date && (
                                    <span className="text-sm text-gray-500 mt-1 sm:mt-0">{task.date}</span>
                                  )}
                                </div>
                                <p className="mt-1 text-sm text-gray-600">{task.description}</p>
                              </div>
                            </div>

                            {!task.locked && task.requiredTaskId && (
                              <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center text-xs text-gray-500">
                                <Info className="w-4 h-4 mr-1" />
                                Requires Task {task.requiredTaskId}
                              </div>
                            )}
                          </div>
                          
                          {!task.locked && task.steps && (
                            <div className="mt-4 space-y-4">
                              {task.steps.map((step) => (
                                <div 
                                  key={step.id}
                                  className={`rounded-lg p-3 sm:p-4 ${
                                    step.completed ? 'bg-green-50' : 'bg-gray-50'
                                  }`}
                                >
                                  <div className="flex items-start">
                                    <button
                                      onClick={() => handleStepComplete(section.id, task.id, step.id)}
                                      className={`flex items-center space-x-2 p-2 rounded hover:bg-white/50 ${
                                        step.completed ? 'text-green-600' : 'text-gray-600'
                                      }`}
                                    >
                                      {step.completed ? (
                                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                      ) : (
                                        <Circle className="w-4 h-4 flex-shrink-0" />
                                      )}
                                      <span className="font-medium text-sm sm:text-base">{step.text}</span>
                                    </button>
                                  </div>
                                  
                                  <div className="mt-2 ml-8">
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                    
                                    {step.validation && (
                                      <div className="mt-2 space-y-1">
                                        <p className="text-xs font-medium text-gray-500">Requirements:</p>
                                        {step.validation.map((item, index) => (
                                          <div key={index} className="flex items-center space-x-2 text-xs text-gray-500">
                                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                                            <span>{item}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          {!task.locked && task.documents && task.documents.length > 0 && (
                            <div className="mt-4 space-y-2">
                              <p className="text-xs font-medium text-gray-500">Related Documents:</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {task.documents.map((doc, index) => (
                                  <button
                                    key={index}
                                    className="flex items-center space-x-2 w-full p-2 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-150"
                                  >
                                    <Download className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <div className="text-left">
                                      <p className="text-sm font-medium text-blue-700 truncate">{doc.name}</p>
                                      <p className="text-xs text-blue-600 truncate">{doc.description}</p>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>

        {canProceed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 sm:mt-8 flex justify-center px-4"
          >
            <button
              onClick={handleNextSection}
              className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span className="text-sm sm:text-base">Continue to {nextSection.title}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;