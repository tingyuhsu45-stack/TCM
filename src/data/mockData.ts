import type { Session, SurveyTemplate, FeedbackScenario, SurveyResponse } from '../types';

export const tcmServicesList = [
  'The Investigation Company',
  'The Mediation Company',
  'Resolution Framework',
  'The TCM Academy',
  'The People and Culture Association',
  'Engage Leadership',
  'Engage Coaching',
  'People and Culture',
  'Other:'
];

export const preSessionTemplate: SurveyTemplate = {
  title: 'Pre-Session Preparation form',
  questions: [
    { id: '1', type: 'text', text: 'What motivated you to attend this course?' },
    { id: '2', type: 'text', text: 'Describe a recent situation related to this course topic that you had to deal with. What did you do?' },
    { id: '3', type: 'choice', text: 'Which statement best describes your current confidence in handling situations related to this course?', options: [
      'I handle these situations effectively',
      'I manage some aspects but struggle with others',
      'I often feel unsure or avoid these situations',
      'I have little or no experience with these situations'
    ]},
    { id: '4', type: 'text', text: 'What is one situation in your role at work, where you would most like to improve your approach related to this course?' },
    { id: '5', type: 'text', text: 'What skills, behavior or capabilities do you hope to achieve from this training course?' },
    { id: '6', type: 'text', text: 'Is there anything else you feel the trainer needs to know to help ensure your experience meets your needs?' },
    { id: '7', type: 'choice', text: 'May TCM use your response in marketing materials?', options: ['Yes, happy to use', 'No, please don’t use'] },
    { id: '8', type: 'checkbox', text: 'Please tick in the other TCM services you would be interested in:', options: tcmServicesList }
  ]
};

export const endSessionTemplate: SurveyTemplate = {
  title: 'Learner Reflection Form',
  questions: [
    { id: '1', type: 'text', text: 'What is one concept, tool, or idea from today that you understand clearly and could explain to someone else?' },
    { id: '2', type: 'text', text: 'Imagine you’re back at work tomorrow. Which situation would you apply this training to first, and what would you do differently?' },
    { id: '3', type: 'choice', text: 'Choose the statement that best describes your readiness to apply what you learned:', options: [
      'I can confidently apply the tools in real situations',
      'I can apply some tools but would like more practice',
      'I understand the concepts but don’t yet feel ready to use them',
      'I’m unclear on how to apply the tools'
    ]},
    { id: '4', type: 'choice', text: 'During the session, you practised scenarios or role-plays. Which statement best reflects your performance?', options: [
      'I demonstrated the behaviors effectively',
      'I partially demonstrated them and know what to improve',
      'I struggled to demonstrate the behaviors',
      'We didn’t do a scenario/role-play'
    ]},
    { id: '5', type: 'text', text: 'What positive outcome do you expect this training to help you achieve in your role?' },
    { id: '6', type: 'text', text: 'What improvements would make this course even better or more useful for you? (E.g. Training Style, course structure, content relevance, pace, etc.)' },
    { id: '7', type: 'choice', text: 'Would you recommend this course to a colleague?', options: ['Yes', 'Maybe', 'No'] },
    { id: '8', type: 'text', text: 'TCM loves celebrating our customers’ successes and sharing their stories. If you would like to share a testimonial about your experience, please add it here:' },
    { id: '9', type: 'choice', text: 'May TCM use your response in marketing materials?', options: ['Yes, happy to use', 'No, please don’t use'] },
    { id: '10', type: 'checkbox', text: 'Please tick in the other TCM services you would be interested in:', options: tcmServicesList },
    { id: '11', type: 'scale', text: 'Overall, how would you rate the course? (Please shade in the stars with 1 being very poor and 5 being very good)' }
  ]
};

export const refresherTemplate: SurveyTemplate = {
  title: 'Learning Transfer Report',
  questions: [
    { id: '1', type: 'text', text: 'List the situations where you felt like you had an opportunity to apply the training at work, in the past month.' },
    { id: '2', type: 'text', text: 'Describe a real situation where you applied something from the training at work. What was the situation? Which specific skill or method did you use? What did you do step-by-step? What happened as a result?' },
    { id: '3', type: 'text', text: 'Which parts of the training felt difficult to apply in real work? Why?' },
    { id: '4', type: 'text', text: 'Since the training, what have you done differently at work?' },
    { id: '5', type: 'text', text: 'What support, tools, or conditions helped you apply what you learnt?' },
    { id: '6', type: 'text', text: 'What improvements would make this course even better or more useful for you? (E.g. Training Style, course structure, content relevance, pace, etc.)' },
    { id: '7', type: 'choice', text: 'Would you recommend this course to a colleague?', options: ['Yes', 'Maybe', 'No'] },
    { id: '8', type: 'text', text: 'TCM loves celebrating our customers’ successes and sharing their stories. If you would like to share a testimonial about your experience, please add it here:' },
    { id: '9', type: 'choice', text: 'May TCM use your response in marketing materials?', options: ['Yes, happy to use', 'No, please don’t use'] },
    { id: '10', type: 'checkbox', text: 'Please tick in the other TCM services you would be interested in:', options: tcmServicesList },
    { id: '11', type: 'scale', text: 'Overall, how would you rate the usefulness of the course? (Please shade in the stars with 1 being very poor and 5 being very good)' }
  ]
};

export const mockAiScenariosLibrary: FeedbackScenario[] = [
  {
    id: 'ai-1',
    scenarioText: 'A team member is continuously late to morning standups but delivers high-quality work.',
    prompt: 'Based on the LTEM principles, how do you address this without demotivating them?',
    rubric: ['Success: Addresses the lateness privately.', 'Red Flag: Punishes them publicly.', 'Red Flag: Ignores the issue.'],
    managerChecklist: ['Observe next 3 standups', 'Check 1-on-1 meeting notes to verify conversation happened']
  },
  {
    id: 'ai-2',
    scenarioText: 'Two colleagues are arguing loudly in an open-plan office over a shared project deliverable.',
    prompt: 'Applying the conflict resolution tools discussed today, outline your immediate next steps.',
    rubric: ['Success: De-escalates the public argument by moving them to a private room.', 'Red Flag: Takes sides in front of the team.', 'Success: Asks open-ended questions to uncover the root cause.'],
    managerChecklist: ['Monitor tension levels over 2 weeks', 'Review post-project feedback from both individuals']
  },
  {
    id: 'ai-3',
    scenarioText: 'A remote employee seems disconnected during meetings and misses minor email deadlines repeatedly.',
    prompt: 'How would you re-engage this employee using the structured empathy framework?',
    rubric: ['Success: Begins a 1-on-1 with a wellness check.', 'Red Flag: Immediately issues a formal warning.', 'Red Flag: Assumes they are looking for a new job without asking.'],
    managerChecklist: ['Track meeting participation rate over 1 month', 'Review weekly deadline hit-rate in Jira/Asana']
  }
];

// Combine standard questions with injected AI Questions for the robust Leadership Q3 demo
const robustEndSessionTemplate = JSON.parse(JSON.stringify(endSessionTemplate));
robustEndSessionTemplate.questions.unshift({
  id: 'dynamic-ai-2',
  type: 'text',
  text: `[AI Scenario 1]: ${mockAiScenariosLibrary[1].scenarioText}\n\nQuestion: ${mockAiScenariosLibrary[1].prompt}` 
});
robustEndSessionTemplate.questions.unshift({
  id: 'dynamic-ai-1',
  type: 'text',
  text: `[AI Scenario 2]: ${mockAiScenariosLibrary[0].scenarioText}\n\nQuestion: ${mockAiScenariosLibrary[0].prompt}` 
});

const mockPopulatedResponses: SurveyResponse[] = [
  {
    id: 'resp-001',
    stage: 'end',
    submittedAt: '2026-04-10T16:05:00Z',
    answers: {
      'dynamic-ai-1': 'I would pull them aside in private after the meeting. Because they deliver great work, I would start by acknowledging their value to the team, and then firmly but gently ask if there are structural barriers preventing them from making the standup on time.',
      'dynamic-ai-2': 'I would approach them calmly and say "Let\'s take this into a meeting room so we don\'t disrupt everyone." Once inside, I\'d let them both explain their sides without interrupting.',
      '1': 'The structured empathy framework. It makes complete sense to focus on the emotional reality before moving to problem-solving.',
      '3': 'I can confidently apply the tools in real situations',
      '4': 'I demonstrated the behaviors effectively',
      '7': 'Yes',
      '11': '5'
    }
  },
  {
    id: 'resp-002',
    stage: 'end',
    submittedAt: '2026-04-10T16:07:30Z',
    answers: {
      'dynamic-ai-1': 'I would just ignore it because they are a top performer and I don\'t want them to quit over something as small as a morning standup.',
      'dynamic-ai-2': 'I\'d step between them and tell them they are acting unprofessionally and that they need to get back to their desks immediately. Then I would email their manager.',
      '1': 'Active listening and the resolution triangle.',
      '3': 'I can apply some tools but would like more practice',
      '4': 'I partially demonstrated them and know what to improve',
      '7': 'Maybe',
      '11': '3'
    }
  },
  {
    id: 'resp-003',
    stage: 'end',
    submittedAt: '2026-04-10T16:12:00Z',
    answers: {
      'dynamic-ai-1': 'Set up a private 15 minute call. Ask open ended questions about their morning routine. Emphasize that timeliness is important for team morale regardless of individual output.',
      'dynamic-ai-2': 'Move them to a private space immediately. Use the "seek to understand" method by asking each person what exactly is blocking the shared deliverable.',
      '1': 'Conflict de-escalation steps using physical barriers and tone matching.',
      '3': 'I can confidently apply the tools in real situations',
      '4': 'I demonstrated the behaviors effectively',
      '7': 'Yes',
      '11': '4'
    }
  },
  {
    id: 'resp-004',
    stage: 'end',
    submittedAt: '2026-04-10T16:20:45Z',
    answers: {
      'dynamic-ai-1': 'I would bring it up at the very next standup in front of everyone so the whole team knows the standard applied to everyone.',
      'dynamic-ai-2': 'Tell them to stop acting like children and do their jobs. Provide them a direct command on how to split the deliverable.',
      '1': 'Honestly I didn\'t learn much that I didn\'t already know as a manager.',
      '3': 'I can confidently apply the tools in real situations',
      '4': 'I demonstrated the behaviors effectively',
      '7': 'No',
      '11': '1'
    }
  },
  {
    id: 'resp-005',
    stage: 'end',
    submittedAt: '2026-04-10T16:25:12Z',
    answers: {
      'dynamic-ai-1': 'Talk to them in private. Find out if there are childcare or transit issues. If so, move the standup time back 15 minutes for the whole team.',
      'dynamic-ai-2': 'Gently interrupt them, suggest we go grab a coffee in the breakroom to discuss it quietly. Listen actively.',
      '1': 'The "Red Flag vs Success" rubric concept was very good for framing my own behavior.',
      '3': 'I can confidently apply the tools in real situations',
      '4': 'I partially demonstrated them and know what to improve',
      '7': 'Yes',
      '11': '5'
    }
  }
];

export const initialSessions: Session[] = [
  {
    id: 'b6e83',
    courseName: 'Leadership Executive Coaching (Q3)',
    date: '2026-04-10',
    companyTaught: 'ACME Corp',
    trainerNotes: 'Needs focus on remote communication.',
    surveysCompleted: { pre: true, end: true, refresher: false },
    surveys: {
      pre: JSON.parse(JSON.stringify(preSessionTemplate)),
      end: robustEndSessionTemplate,
      refresher: JSON.parse(JSON.stringify(refresherTemplate))
    },
    responses: mockPopulatedResponses
  },
  {
    id: 'f9a21',
    courseName: 'Management Basics 101',
    date: '2026-04-15',
    companyTaught: 'Globex Inc',
    trainerNotes: '',
    surveysCompleted: { pre: false, end: false, refresher: false },
    surveys: {
      pre: JSON.parse(JSON.stringify(preSessionTemplate)),
      end: JSON.parse(JSON.stringify(endSessionTemplate)),
      refresher: JSON.parse(JSON.stringify(refresherTemplate))
    },
    responses: []
  }
];
