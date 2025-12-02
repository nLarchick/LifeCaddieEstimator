# Life Caddie Estimator App

An early-stage AI project focused on building a fully-functioning **image-recognition application** capable of generating **organizing estimates** from photos of cluttered rooms. The long-term goal is to use computer vision and AI reasoning to help users quickly evaluate how much time, effort, or professional assistance may be needed to organize a space.

Planned future capabilities:

* Accepting image inputs (JPEG/PNG)
* Detecting clutter types, objects, and layout information
* Estimating organization effort, time, and resource requirements
* Exporting structured summaries or reports
* Providing optional visual overlays or heatmaps for clutter
* Web or mobile frontend

## 📁 Project Structure ~currently~

```
Estimator
├── src/                # Project files
│   └── hello.py        
├── tests/              # Future unit & integration tests
└── README.md           # Project documentation
```

## Requirements

* Python 3.12.3 (recommended)
* ~TBD

## Future Roadmap

* **Image Upload Pipeline**
  * Accept photo input (using local paths)
  * Turn towards image upload
  * Finalize with front-end input for the image
* **Image Recognition**
  * Detect clutter zones, classify items, measure density
* **Estimation Engine**
  * AI-driven scoring for difficulty, time, manpower, and organizational method
  * Work directly with Life Caddie leaders to increase estimation precision
* **UX/UI**
  * Front end for adding images, context, and displaying estimated results
* **Model Fine-Tuning**
  * Improve accuracy with custom imagesets and before-afters