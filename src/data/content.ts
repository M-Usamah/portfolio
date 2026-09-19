export type Project = {
  title: string;
  description: string;
  image: string;
  categories: string[];
  tags: string[];
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  description: string;
};

export const site = {
  name: "Mohammed Usamah",
  givenName: "Mohammed",
  familyName: "Usamah",
  alternateName: ["M-Usamah", "M Usamah", "Mohammed Usamah AI/ML Engineer"],
  title: "AI/ML Engineer",
  subtitle: "computer vision, digital twins & Unreal tooling",
  email: "mohammedusamah84@gmail.com",
  github: "https://github.com/M-Usamah",
  linkedin: "https://www.linkedin.com/in/mohammed-usamah-952030173/",
  url: "https://m-usamah.github.io",
  locale: "en_US",
  themeColor: "#07080c",
  description:
    "Mohammed Usamah is an AI/ML engineer building computer vision models, NLP systems, digital twins, and Unreal Engine 5 Python editor tools. Available for freelance and contract work.",
  shortDescription:
    "AI/ML engineer specializing in computer vision, NLP, digital twins, and Unreal Engine 5 tools.",
  knowsAbout: [
    "Python",
    "Unreal Python",
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "YOLO",
    "YOLO-World",
    "Digital Twins",
    "Unreal Engine 5",
    "RAG",
    "LangChain",
    "CrewAI",
    "OpenCV",
    "Hugging Face",
    "Machine Learning",
    "Agentic AI",
  ],
} as const;

/** Factual about copy — shared by the UI and structured data / llms.txt */
export const about = {
  headline: "Building models that ship into real tools",
  roleLine: "AI/ML engineer · Unreal Python plugin developer",
  summary:
    "Mohammed Usamah is an AI/ML engineer with about two years of experience training custom models and shipping production tools. He currently builds Unreal Engine 5 Python editor plugins at InfotainmentAcademy, contributes as an AI/ML engineer at JayzenAI, and takes freelance computer-vision and NLP work.",
  paragraphs: [
    "I specialize in custom model training — computer vision, NLP, and agentic systems — then wrap that work in tools people can actually run. Right now that means Unreal Engine 5.6 Python plugins for digital twins, FBX import, asset migration, and packaging at InfotainmentAcademy.",
    "Alongside studio tooling I build and fine-tune models at JayzenAI and for freelance clients: YOLO and OpenCV pipelines for cameras and drones, RAG agents for document Q&A, and PyTorch / TensorFlow systems for inspection and analytics.",
  ],
  focuses: [
    {
      title: "Computer vision",
      body: "Detection, tracking, and inspection systems for cameras, drones, live streams, and synthetic data in Isaac Sim.",
    },
    {
      title: "Digital twins",
      body: "Photo and video to furniture-level Unreal scenes with YOLO-World running inside the editor.",
    },
    {
      title: "Unreal tooling",
      body: "Standalone UE5.6 Python plugins for twin workflows, FBX packages, dependency migration, and UAT packaging.",
    },
  ],
  facts: [
    { label: "Name", value: "Mohammed Usamah" },
    { label: "Role", value: "AI/ML Engineer & Unreal Python Plugin Developer" },
    { label: "Focus", value: "Computer vision, digital twins, Unreal Engine 5 tools" },
    { label: "Current", value: "InfotainmentAcademy · JayzenAI · Freelance" },
    { label: "Stack", value: "Python, PyTorch, TensorFlow, YOLO, Unreal Python" },
    { label: "Availability", value: "Open to freelance and contract work" },
  ],
  faqs: [
    {
      question: "Who is Mohammed Usamah?",
      answer:
        "Mohammed Usamah is an AI/ML engineer who builds computer vision models, NLP and agent systems, digital twins, and Unreal Engine 5 Python editor tools.",
    },
    {
      question: "What does Mohammed Usamah work on?",
      answer:
        "He ships Unreal Engine plugins for digital twins and asset pipelines at InfotainmentAcademy, develops AI systems at JayzenAI, and delivers freelance computer-vision and NLP projects.",
    },
    {
      question: "What technologies does Mohammed Usamah use?",
      answer:
        "Python, Unreal Python, PyTorch, TensorFlow, YOLO / YOLO-World, OpenCV, LangChain, CrewAI, Hugging Face, Docker, and related ML tooling.",
    },
    {
      question: "Is Mohammed Usamah available for hire?",
      answer:
        "Yes. He is available for freelance and contract work in computer vision, digital twins, and Unreal Engine tooling. Contact him via the form or mohammedusamah84@gmail.com.",
    },
  ],
} as const;

export const skillGroups = [
  { name: "Languages", items: ["Python", "Unreal Python", "SQL", "HTML / CSS", "JavaScript"] },
  { name: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "Deep Learning", "CNNs", "GANs", "VAEs", "Diffusion", "LSTMs", "Time Series"] },
  { name: "Computer Vision", items: ["OpenCV", "YOLO", "YOLO-World", "MediaPipe", "Object Detection", "Pose Estimation", "U-Net", "Isaac Sim"] },
  { name: "NLP & Agents", items: ["NLP", "Transformers", "LLMs", "RAG", "LangChain", "LangGraph", "CrewAI", "Hugging Face", "Whisper", "Gemini"] },
  { name: "Unreal Engine", items: ["Unreal Engine 5.6", "Editor Tools", "Digital Twins", "FBX Pipeline", "Asset Migration", "UAT Packaging"] },
  { name: "Tools & Data", items: ["Git", "Docker", "Jupyter", "Pandas", "NumPy", "Matplotlib", "Streamlit", "n8n"] },
] as const;

export const projects: Project[] = [
  {
    "title": "Digital Twin Builder",
    "description": "Standalone UE5.6 tool: images or video \u2192 YOLO-World detection \u2192 spawned digital twin. Drops into any Unreal project.",
    "image": "/assets/images/digital-twin-real-vs-digital.png",
    "categories": [
      "unreal",
      "computer-vision"
    ],
    "tags": [
      "Unreal Engine",
      "YOLO-World",
      "Python"
    ]
  },
  {
    "title": "FBX Batch Importer Plugin",
    "description": "Unreal editor plugin that imports FBX or ZIP packages with textures, materials, and folder structure. Supports skeletal or static meshes from Tools \u2192 Import FBX Package.",
    "image": "https://images.unsplash.com/photo-1617791160505-6f00504e3519?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "unreal",
      "python"
    ],
    "tags": [
      "Unreal Plugin",
      "FBX",
      "Python"
    ]
  },
  {
    "title": "Asset & Component Migrator",
    "description": "Right-click Unreal assets or components and package them with every dependency into a standalone ZIP or another local project.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "unreal",
      "python"
    ],
    "tags": [
      "Unreal Plugin",
      "Asset Pipeline",
      "Editor Tools"
    ]
  },
  {
    "title": "Project Packager Plugin",
    "description": "Cook and package the Unreal project as Developer or Shipping builds, with live UAT progress streamed to the Output Log.",
    "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "unreal",
      "python"
    ],
    "tags": [
      "Unreal Plugin",
      "UAT",
      "Packaging"
    ]
  },
  {
    "title": "AI Drone Tracking",
    "description": "Multi-sensor FPV drone detection in Isaac Sim using synchronized RGB and LWIR cameras, YOLO, and ground-truth pose for Kalman tracking.",
    "image": "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Isaac Sim"
    ]
  },
  {
    "title": "Tennis Match Analytics",
    "description": "Computer vision pipeline for tennis footage: court calibration, ball tracking, bounce detection, and YOLO-based player analysis.",
    "image": "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Sports Analytics"
    ]
  },
  {
    "title": "Call of Duty Assistant",
    "description": "Computer vision assistant for Call of Duty. The match ran on a PS4 while we remotely accessed the stream on PC, then ran enemy detection on that live feed.",
    "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "PS4 Remote Play"
    ]
  },
  {
    "title": "Anime Frame",
    "description": "Pose-retargeting pipeline that turns sketches and Canny edges into consistent anime frames with Gemini, Streamlit UI, and Docker.",
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision"
    ],
    "tags": [
      "Python",
      "Gemini",
      "Streamlit"
    ]
  },
  {
    "title": "Face Mask Detection",
    "description": "Ensemble CNN pipeline comparing SimpleCNN, MobileNetV3, and ResNet50 with voting, stacking, and statistical ablation studies.",
    "image": "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "PyTorch",
      "Computer Vision"
    ]
  },
  {
    "title": "Vehicle Counter",
    "description": "Detects and counts vehicles in traffic footage using object detection algorithms in real time.",
    "image": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Object Detection"
    ]
  },
  {
    "title": "Cloth Defect Detection",
    "description": "Mask R-CNN instance segmentation for fabric defects, with COCO-format training, mAP evaluation, and patch-based autoencoder support.",
    "image": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Mask R-CNN",
      "PyTorch"
    ]
  },
  {
    "title": "Plant Disease Detection",
    "description": "Ensemble of EfficientNet and ResNet50 on PlantDoc images, with Grad-CAM explanations and statistical model comparison for a thesis pipeline.",
    "image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "EfficientNet",
      "Ensemble"
    ]
  },
  {
    "title": "Nutrition AI",
    "description": "ResNet50 regression on Nutrition5k food images to predict calories, mass, fat, carbs, and protein, served through a FastAPI app.",
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "PyTorch",
      "FastAPI"
    ]
  },
  {
    "title": "Mechanic AI",
    "description": "Vehicle diagnosis agent that reads workshop spreadsheets and answers engine-fault questions with a Groq LLM, Streamlit, and Gradio UIs.",
    "image": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "python"
    ],
    "tags": [
      "Python",
      "LLM",
      "Streamlit"
    ]
  },
  {
    "title": "Alzheimer\u2019s Detection",
    "description": "EfficientNet and ResNet50 MRI classifiers with GAN-based balancing, augmentation studies, and Grad-CAM explanations.",
    "image": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "ResNet",
      "Medical Imaging"
    ]
  },
  {
    "title": "AI Learning System",
    "description": "Full-stack study assistant: upload PDFs or images, OCR the content, simplify topics with LLaMA, then generate quizzes with progress tracking.",
    "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "FastAPI",
      "Next.js",
      "LLM"
    ]
  },
  {
    "title": "Breast Cancer Detection",
    "description": "ResNet50 with spatial attention on a highly imbalanced 54k-image dataset, plus U-Net segmentation for region highlighting.",
    "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "ResNet50",
      "U-Net"
    ]
  },
  {
    "title": "ASD Hybrid Classifier",
    "description": "Parallel ViT-B/16 and ResNet50 hybrid that predicts class and intensity from the same images, with cross-validation notebooks.",
    "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "ViT",
      "ResNet50"
    ]
  },
  {
    "title": "Pig Pose Estimation",
    "description": "YOLO pose models for pig detection and keypoints, with dataset analysis and an interactive visualizer for BamaPig2D-style annotations.",
    "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Pose Estimation"
    ]
  },
  {
    "title": "Invoice Reader",
    "description": "PDF text extraction with pdfplumber, then an LLM turns invoices into structured JSON through a desktop UI.",
    "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "nlp",
      "python"
    ],
    "tags": [
      "Python",
      "LLM",
      "Document AI"
    ]
  },
  {
    "title": "AlSi10Mg Porosity Prediction",
    "description": "Random Forest and baseline models that predict XCT porosity from laser-powder-bed processing parameters, with a Streamlit dashboard.",
    "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning",
      "python"
    ],
    "tags": [
      "Python",
      "Random Forest",
      "Streamlit"
    ]
  },
  {
    "title": "Lumbar MRI Segmentation",
    "description": "YOLO11 segmentation on lumbo-sacral spine MRI scans to mark regions of interest for clinical review.",
    "image": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Medical Imaging"
    ]
  },
  {
    "title": "Metro Object Detector",
    "description": "HOG features and a linear SVM to detect and classify objects in metro imagery from bounding-box annotations.",
    "image": "https://images.unsplash.com/photo-1474487548417-7816c4d2c6cb?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "HOG",
      "SVM"
    ]
  },
  {
    "title": "Webbots",
    "description": "Browser automation bots for repeating web tasks, scraping, and agent-style navigation in Python.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "python"
    ],
    "tags": [
      "Python",
      "Automation",
      "Web"
    ]
  },
  {
    "title": "Fruit Detection",
    "description": "Computer vision model that classifies fruit from images for inspection and sorting workflows.",
    "image": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Classification"
    ]
  },
  {
    "title": "GAN from Scratch",
    "description": "Generative adversarial network implemented from the ground up to learn image generation without high-level wrappers.",
    "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "GANs",
      "Deep Learning"
    ]
  },
  {
    "title": "Transformers from Scratch",
    "description": "Attention, encoder-decoder stacks, and training loops built by hand to understand modern NLP architectures.",
    "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "nlp",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Transformers",
      "NLP"
    ]
  },
  {
    "title": "Variational Autoencoder from Scratch",
    "description": "VAE implementation covering encoder-decoder structure, latent sampling, and reconstruction loss.",
    "image": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "VAE",
      "Deep Learning"
    ]
  },
  {
    "title": "Office Management System",
    "description": "Desktop/web tooling for office records, staff workflows, and day-to-day operations.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "CRUD",
      "Automation"
    ]
  },
  {
    "title": "Web Chat",
    "description": "Real-time chat application for browser-based messaging and conversation threads.",
    "image": "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python",
      "nlp"
    ],
    "tags": [
      "Python",
      "Web",
      "Messaging"
    ]
  },
  {
    "title": "Robotics",
    "description": "Robotics experiments covering control, perception, and Python simulation for motion tasks.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Robotics",
      "Simulation"
    ]
  },
  {
    "title": "Scratch ML",
    "description": "Core machine-learning algorithms reimplemented from scratch for learning and debugging.",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "NumPy",
      "Machine Learning"
    ]
  },
  {
    "title": "Netflix Clone",
    "description": "Streaming-style UI clone with catalog browsing and playback layout patterns.",
    "image": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "Web",
      "UI"
    ]
  },
  {
    "title": "Iris Classification",
    "description": "Classic iris flower classifier using feature analysis and supervised learning.",
    "image": "https://images.unsplash.com/photo-1466692476866-aef57dfb3f0d?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Classification",
      "Scikit-Learn"
    ]
  },
  {
    "title": "Dice Rotate",
    "description": "Vision/graphics experiment for detecting and tracking dice rotation from image sequences.",
    "image": "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "python"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Tracking"
    ]
  },
  {
    "title": "Manufacturing Quality Control",
    "description": "Detects damage in car manufacturing parts using deep learning for automated quality control.",
    "image": "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Deep Learning"
    ]
  },
  {
    "title": "Card Detection",
    "description": "Identifies and classifies playing cards from images even under partial visibility or varied lighting conditions.",
    "image": "https://images.unsplash.com/photo-1529480384838-c1681c84aca5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Object Detection"
    ]
  },
  {
    "title": "Face Recognition Attendance System",
    "description": "Automated attendance tracking using real-time face detection and recognition without manual input.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "Face Recognition"
    ]
  },
  {
    "title": "Real-Time Pose Estimation",
    "description": "Human body pose detection and skeleton tracking from video streams for fitness coaching and gesture control.",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Computer Vision",
      "MediaPipe"
    ]
  },
  {
    "title": "Medical Image Segmentation",
    "description": "U-Net model that segments regions of interest in medical scans for early detection of anomalies.",
    "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "U-Net",
      "Medical Imaging"
    ]
  },
  {
    "title": "Basketball Analytics System",
    "description": "Tracks player movements, ball trajectories, and shot accuracy in real time from game footage.",
    "image": "https://images.unsplash.com/photo-1546519638405-a9b66ed52c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Sports Analytics"
    ]
  },
  {
    "title": "Nail Design Try-On",
    "description": "AR overlay of nail art onto live hand video so users can try styles before applying them.",
    "image": "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "AR",
      "MediaPipe"
    ]
  },
  {
    "title": "Football Analytics System",
    "description": "Tracks player positions, tactical formations, and match statistics from broadcast footage.",
    "image": "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Sports Analytics"
    ]
  },
  {
    "title": "Store Security System",
    "description": "Retail surveillance that detects shoplifting, monitors customer flow, and triggers real-time alerts.",
    "image": "https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "computer-vision",
      "cybersecurity"
    ],
    "tags": [
      "Python",
      "YOLO",
      "Surveillance"
    ]
  },
  {
    "title": "News-AI",
    "description": "Multi-agent system built with CrewAI that gathers, analyzes, and summarizes news from various sources.",
    "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "CrewAI",
      "Multi-Agent"
    ]
  },
  {
    "title": "RAG Document Q&A Agent",
    "description": "Retrieval-augmented generation that answers queries over large document collections with cited responses.",
    "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "RAG",
      "LangChain"
    ]
  },
  {
    "title": "AI Research Agent",
    "description": "Autonomous agent that browses the web, extracts information, and compiles structured research reports.",
    "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "LangGraph",
      "Web Search"
    ]
  },
  {
    "title": "AI Code Review Agent",
    "description": "Reviews pull requests, detects bugs and code smells, and explains issues in plain language.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "LLM",
      "Code Analysis"
    ]
  },
  {
    "title": "AI Customer Support Agent",
    "description": "Handles queries via RAG, keeps conversation memory, and escalates complex issues intelligently.",
    "image": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "RAG",
      "Memory"
    ]
  },
  {
    "title": "Document Processing Agent",
    "description": "Extracts, classifies, and routes information from invoices, contracts, and forms with no manual effort.",
    "image": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "nlp"
    ],
    "tags": [
      "Python",
      "LLM",
      "Document AI"
    ]
  },
  {
    "title": "Product Recommendation Agent",
    "description": "Analyzes behavior and purchase history to deliver personalized product recommendations in real time.",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "LLM",
      "Recommendation"
    ]
  },
  {
    "title": "Factory Process Monitoring Agent",
    "description": "Monitors industrial equipment metrics, detects anomalies, and triggers maintenance before failures.",
    "image": "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "agentic-ai",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "IoT",
      "Anomaly Detection"
    ]
  },
  {
    "title": "Research Paper Summarizer",
    "description": "Generates concise summaries of academic papers while preserving key findings and conclusions.",
    "image": "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "categories": [
      "nlp"
    ],
    "tags": [
      "Python",
      "NLP",
      "Transformers"
    ]
  },
  {
    "title": "House Price Prediction",
    "description": "Regression model predicting house prices from location, size, and amenities using ensemble methods.",
    "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Regression",
      "Feature Engineering"
    ]
  },
  {
    "title": "Car Price Prediction",
    "description": "Predicts car prices from make, model, year, and specs using ensemble ML algorithms.",
    "image": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Regression",
      "EDA"
    ]
  },
  {
    "title": "Customer Churn Prediction",
    "description": "Predicts which customers are likely to leave a service using behavioral data for retention.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "XGBoost",
      "Classification"
    ]
  },
  {
    "title": "Movie Recommendation System",
    "description": "Hybrid engine combining collaborative filtering and content-based methods for movie suggestions.",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Recommendation",
      "Scikit-Learn"
    ]
  },
  {
    "title": "Credit Card Fraud Detection",
    "description": "Anomaly detection for fraudulent transactions using imbalanced learning and ensemble classifiers.",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Anomaly Detection",
      "Random Forest"
    ]
  },
  {
    "title": "BTC Price Prediction",
    "description": "LSTM time-series model forecasting Bitcoin prices using historical data and technical indicators.",
    "image": "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
    "categories": [
      "machine-learning",
      "time-series"
    ],
    "tags": [
      "Python",
      "LSTM",
      "Time Series"
    ]
  },
  {
    "title": "GreenHouse Gas Emission Prediction",
    "description": "Forecasts greenhouse gas emissions for the next 30 years using historical environmental data.",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning",
      "time-series"
    ],
    "tags": [
      "Python",
      "Time Series",
      "Forecasting"
    ]
  },
  {
    "title": "Stock Price Predictor",
    "description": "Multi-step forecasting combining LSTM and Transformer architectures on historical market data.",
    "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning",
      "time-series"
    ],
    "tags": [
      "Python",
      "Transformer",
      "Time Series"
    ]
  },
  {
    "title": "Weather Forecasting Model",
    "description": "Forecasts temperature, precipitation, and wind patterns from historical meteorological data.",
    "image": "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning",
      "time-series"
    ],
    "tags": [
      "Python",
      "Deep Learning",
      "Climate Data"
    ]
  },
  {
    "title": "Energy Consumption Forecasting",
    "description": "Predicts residential and industrial energy consumption patterns to optimize grid management.",
    "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "machine-learning",
      "time-series"
    ],
    "tags": [
      "Python",
      "LSTM",
      "Energy Analytics"
    ]
  },
  {
    "title": "ReadAny",
    "description": "Reads books and PDFs aloud using text-to-speech for a hands-free audio experience.",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "categories": [
      "voice",
      "python"
    ],
    "tags": [
      "Python",
      "TTS",
      "PDF Processing"
    ]
  },
  {
    "title": "DeepFake Voice Detection",
    "description": "Identifies artificially generated or manipulated voices using spectral analysis and deep learning.",
    "image": "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "voice",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Audio Processing",
      "Deep Learning"
    ]
  },
  {
    "title": "Bird Voice Classification",
    "description": "Identifies bird species from songs and calls using MFCC feature extraction and CNN classification.",
    "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1025&q=80",
    "categories": [
      "voice",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "CNN",
      "Audio Classification"
    ]
  },
  {
    "title": "Speech Emotion Recognition",
    "description": "Classifies human emotions from audio recordings using MFCC and spectrogram features.",
    "image": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "voice",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Emotion AI",
      "Audio Analysis"
    ]
  },
  {
    "title": "Speaker Identification System",
    "description": "Voice biometrics that identify who is speaking by comparing speaker-specific vocal features.",
    "image": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "voice",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Voice Biometrics",
      "Deep Learning"
    ]
  },
  {
    "title": "Real-Time Speech-to-Text",
    "description": "Live transcription using Whisper and streaming pipelines with low latency and high accuracy.",
    "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "voice",
      "nlp"
    ],
    "tags": [
      "Python",
      "Whisper",
      "Speech Recognition"
    ]
  },
  {
    "title": "Youtube Downloader",
    "description": "Python GUI to download YouTube videos and audio with quality and format options.",
    "image": "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "GUI",
      "API Integration"
    ]
  },
  {
    "title": "Anime Latest Episode WebScraper",
    "description": "Scrapes anime sites to track and notify users about the latest episodes of their favorite series.",
    "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "Web Scraping",
      "Automation"
    ]
  },
  {
    "title": "QR Code Generator",
    "description": "Generates QR codes from text or URLs with customizable size and error correction settings.",
    "image": "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "Image Processing",
      "Data Encoding"
    ]
  },
  {
    "title": "Speed Test",
    "description": "Measures internet download/upload speed and ping with a clean interface and visualization.",
    "image": "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "python"
    ],
    "tags": [
      "Python",
      "Networking",
      "Data Visualization"
    ]
  },
  {
    "title": "Network Intrusion Detection System",
    "description": "ML system detecting network intrusions by analyzing traffic patterns in real time.",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "cybersecurity",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Cybersecurity",
      "Network Security"
    ]
  },
  {
    "title": "Password Strength Analyzer",
    "description": "Analyzes password strength using entropy calculation, pattern detection, and dictionary attack simulation.",
    "image": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "cybersecurity",
      "python"
    ],
    "tags": [
      "Python",
      "Cybersecurity",
      "Cryptography"
    ]
  },
  {
    "title": "AI-Powered Malware Detection",
    "description": "Deep learning system analyzing file behavior to detect zero-day threats and classify malware.",
    "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "cybersecurity",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "Deep Learning",
      "Cybersecurity"
    ]
  },
  {
    "title": "Smart Phishing Detection System",
    "description": "NLP and computer vision to detect phishing attempts in emails and websites.",
    "image": "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    "categories": [
      "cybersecurity",
      "machine-learning"
    ],
    "tags": [
      "Python",
      "NLP",
      "Computer Vision"
    ]
  }
];

export const experience: Experience[] = [
  {
    "date": "Sep 2026 \u2013 Present",
    "role": "Unreal Python Plugin Developer",
    "company": "InfotainmentAcademy",
    "description": "Games and studio industry. Building Unreal Engine 5 Python editor plugins for production pipelines, digital twins, and asset workflows.",
    "bullets": [
      "Shipped standalone UE5.6 plugins for digital twins, FBX import, asset migration, and packaging",
      "Automated editor tools in Unreal Python so scenes, assets, and builds can be handled from the editor",
      "Integrated YOLO-World computer vision into Unreal to spawn furniture-level digital twins from photos or video"
    ]
  },
  {
    "date": "May 2026 \u2013 Present",
    "role": "AI/ML Engineer",
    "company": "Freelancing",
    "description": "Custom AI models for computer vision, NLP, and predictive analytics for freelance and contract clients.",
    "bullets": [
      "Created and deployed custom computer vision models for client projects",
      "Built NLP and agentic systems for document Q&A, research, and support workflows",
      "Optimized model performance and reduced training time by 30%"
    ]
  },
  {
    "date": "Jan 2025 \u2013 Present",
    "role": "AI/ML Engineer",
    "company": "JayzenAI",
    "description": "Built and deployed AI-powered solutions, contributing to model development and production ML pipelines.",
    "bullets": [
      "Developed and fine-tuned custom AI models for real-world applications",
      "Built and maintained ML pipelines for data processing and model training",
      "Collaborated with the team to ship AI features into production"
    ]
  },
  {
    "date": "2022 \u2013 2023",
    "role": "Machine Learning Intern",
    "company": "Vertic Lab",
    "description": "Assisted in developing ML models and data preprocessing pipelines with TensorFlow, PyTorch, and data analysis tools.",
    "bullets": [
      "Preprocessed and analyzed large datasets for ML training",
      "Implemented and tested various ML algorithms",
      "Contributed to research papers on AI applications"
    ]
  },
  {
    "date": "2021 \u2013 2022",
    "role": "Python Intern",
    "company": "Logigates",
    "description": "Worked on AI research projects in robotics and computer vision, assisting with experiments and data collection.",
    "bullets": [
      "Assisted in designing experiments for robotics research",
      "Implemented and tested computer vision algorithms",
      "Documented research findings and methodologies"
    ]
  }
];

export const certificates: Certificate[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera — Stanford University",
    date: "December 2023",
    description: "Supervised learning, neural networks, unsupervised learning, and reinforcement learning.",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera — DeepLearning.AI",
    date: "August 2023",
    description: "CNNs, sequence models, attention mechanisms, and transformers.",
  },
  {
    title: "Python for Data Science and Machine Learning",
    issuer: "freeCodeCamp",
    date: "July 2022",
    description: "Python libraries for data analysis, visualization, and machine learning.",
  },
  {
    title: "Applied Generative Adversarial Networks (GANs)",
    issuer: "Coursera",
    date: "April 2023",
    description: "Developing and training GANs for generation tasks.",
  },
  {
    title: "Using Vector Search for Semantic Search",
    issuer: "DeepLearning.AI",
    date: "February 2023",
    description: "Vector-based search for semantic analysis and retrieval.",
  },
  {
    title: "Introduction to AI and Vector Search",
    issuer: "DeepLearning.AI",
    date: "January 2023",
    description: "Fundamentals of AI and vector search technologies.",
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    date: "March 2023",
    description: "Prompt engineering for ChatGPT and similar LLMs.",
  },
  {
    title: "Quantization Fundamentals with Hugging Face",
    issuer: "DeepLearning.AI",
    date: "April 2023",
    description: "Model quantization techniques in the Hugging Face ecosystem.",
  },
  {
    title: "Getting Started with Mistral",
    issuer: "DeepLearning.AI",
    date: "May 2023",
    description: "Using Mistral language models for downstream applications.",
  },
  {
    title: "Multi AI Agent Systems with CrewAI",
    issuer: "DeepLearning.AI",
    date: "June 2023",
    description: "Building and deploying multi-agent systems with CrewAI.",
  },
  {
    title: "Introduction to On-Device AI",
    issuer: "DeepLearning.AI",
    date: "July 2023",
    description: "Running AI models on edge devices and optimization techniques.",
  },
  {
    title: "Introducing Multimodal LLaMA 3.2",
    issuer: "DeepLearning.AI",
    date: "August 2023",
    description: "Multimodal LLaMA 3.2 for combined text and visual tasks.",
  },
  {
    title: "Atlas Vector Search",
    issuer: "DeepLearning.AI",
    date: "September 2023",
    description: "Vector search with Atlas for efficient information retrieval.",
  },
  {
    title: "How Diffusion Models Work",
    issuer: "DeepLearning.AI",
    date: "October 2023",
    description: "Fundamentals of diffusion models and generative AI applications.",
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "unreal", label: "Unreal" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "agentic-ai", label: "Agentic AI" },
  { id: "nlp", label: "NLP" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "time-series", label: "Time Series" },
  { id: "voice", label: "Voice" },
  { id: "python", label: "Python" },
  { id: "cybersecurity", label: "Cybersecurity" },
] as const;

export const INITIAL_VISIBLE = 12;
