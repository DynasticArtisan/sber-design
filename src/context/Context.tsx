import { createContext, useContextSelector } from "use-context-selector";
import { Component, ReactNode } from "react";

type State = {
  ready: boolean;
  location: Location;
  progress: Progress;
  answers: Answers;
};
type Location = {
  module: number;
  lesson: number;
  screen: number;
};
type Progress = {
  complete: boolean;
  modules: moduleProgress[];
};
type moduleProgress = {
  id: string;
  complete: boolean;
  lessons: lessonProgress[];
};
type lessonProgress = {
  id: string;
  complete: boolean;
};
type Answers = any[];

const context = createContext<any>(null);

class Context extends Component<any, State> {
  state: State = {
    ready: false,
    location: {
      module: 0,
      lesson: 0,
      screen: 0,
    },
    progress: {
      complete: false,
      modules: [],
    },
    answers: [],
  };
  componentDidMount() {
    this.getLocation();
    this.getProgress();
    this.getAnswers();
    this.setState({ ready: true });
  }
  async getLocation() {
    const location = localStorage.getItem("location");
    if (location) {
      this.setState({ location: JSON.parse(location) });
    }
  }
  async setLocation(location: Location) {
    localStorage.setItem("location", JSON.stringify(location));
    this.setState({ location });
  }
  async getProgress() {
    const progress = localStorage.getItem("progress");
    if (progress) {
      this.setState({ progress: JSON.parse(progress) });
    }
  }
  async setProgress(progress: Progress) {
    localStorage.setItem("progress", JSON.stringify(progress));
    this.setState({ progress });
  }
  async getAnswers() {
    const answers = localStorage.getItem("answers");
    if (answers) {
      this.setState({ answers: JSON.parse(answers) });
    }
  }
  async setAnswers(answers: Answers) {
    localStorage.setItem("answers", JSON.stringify(answers));
    this.setState({ answers });
  }

  async setModule(module: number) {
    this.setLocation({ module, lesson: 0, screen: 0 });
  }
  async setLesson(lesson: number) {
    this.setLocation({
      ...this.state.location,
      lesson,
      screen: 0,
    });
  }
  async setScreen(screen: number) {
    this.setLocation({
      ...this.state.location,
      screen,
    });
  }
  async startModule(moduleId: string) {
    this.setProgress({
      ...this.state.progress,
      modules: [
        ...this.state.progress.modules,
        { id: moduleId, complete: false, lessons: [] },
      ],
    });
  }
  async startLesson(moduleId: string, lessonId: string) {
    this.setProgress({
      ...this.state.progress,
      modules: this.state.progress.modules.map((m) =>
        m.id === moduleId
          ? { ...m, lessons: [...m.lessons, { id: lessonId, complete: false }] }
          : m
      ),
    });
  }

  async completeCourse() {
    this.setProgress({
      ...this.state.progress,
      complete: true,
    });
  }
  async completeModule(moduleId: string) {
    this.setProgress({
      ...this.state.progress,
      modules: this.state.progress.modules.map((m) =>
        m.id === moduleId ? { ...m, complete: true } : m
      ),
    });
  }
  async completeLesson(moduleId: string, lessonId: string) {
    this.setProgress({
      ...this.state.progress,
      modules: this.state.progress.modules.map((m) =>
        m.id === moduleId
          ? {
              ...m,
              lessons: m.lessons.map((l) =>
                l.id === lessonId ? { ...l, complete: true } : l
              ),
            }
          : m
      ),
    });
  }
  async answer(answer: any) {
    this.setAnswers([...this.state.answers, answer]);
  }
  render(): ReactNode {
    const value = {
      state: this.state,
      actions: {
        setModule: this.setModule.bind(this),
        setLesson: this.setLesson.bind(this),
        setScreen: this.setScreen.bind(this),
        startModule: this.startModule.bind(this),
        startLesson: this.startLesson.bind(this),
        completeCourse: this.completeCourse.bind(this),
        completeModule: this.completeModule.bind(this),
        completeLesson: this.completeLesson.bind(this),
        answer: this.answer.bind(this),
      },
    };
    if (!this.state.ready) {
      return <h1>LOADING...</h1>;
    }
    return (
      <context.Provider value={value}>{this.props.children}</context.Provider>
    );
  }
}

export default Context;

export const useLocation = (): Location =>
  useContextSelector(context, (v) => v.state.location);

export const useProgress = (): Progress =>
  useContextSelector(context, (v) => v.state.progress);

export const useAnswers = (): Answers =>
  useContextSelector(context, (v) => v.state.answers);

export const useActions = (): any =>
  useContextSelector(context, (v) => v.actions);
