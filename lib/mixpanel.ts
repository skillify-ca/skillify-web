import mixpanel from "mixpanel-browser";

mixpanel.init(process.env.MIXPANEL_PROJECT_TOKEN);

const env_check: any = process.env.NODE_ENV === "development";

const actions = {
  identify: (id: any) => {
    try {
      if ((window as any).mixpanel) {
        console.log("Mixpanel user identified", id);

        (window as any).mixpanel.identify(id);
      }
    } catch (e) {
      console.log(e);
    }
  },
  alias: (id: any) => {
    if (env_check) mixpanel.alias(id);
  },
  track: (name: any, props: any) => {
    try {
      if ((window as any).mixpanel) {
        (window as any).mixpanel.track(name, props);
      }
    } catch (e) {
      console.log(e);
    }
  },
  people: {
    set: (props: any) => {
      try {
        if ((window as any).mixpanel) {
          console.log("Mixpanel people set", props);

          (window as any).mixpanel.people.set(props);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};

export const Mixpanel = actions;
