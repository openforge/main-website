import { Component, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  skills: any = {
    angular: '',
    node: '',
    ionic: '',
    html: '',
    css: '',
  };

  @State() isDisabled: boolean = true;
  @State() canRequestInterview: boolean;
  @Event() valueChange: EventEmitter;

  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.skills[field] = value;

    if (
      this.skills.angular > 85 &&
      this.skills.node > 85 &&
      this.skills.ionic > 85 &&
      this.skills.html > 85 &&
      this.skills.css > 85
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.canRequestInterview = true;
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero background-url="assets/bg-hero-mountain.jpg">
          <span slot="header">
            OpenForge is hiring two mid-level developers.
          </span>
          <span slot="body">
            Looking for a new adventure? Want to know if you're the right fit
            for the team? Keep reading!
          </span>
        </app-hero>

        {/* section - intro */}
        <section id="intro">
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-suck.jpg"
              reverse={true}
            >
              <h3 class="text-right" slot="header">
                Forget normal interviews!
              </h3>
              <p class="text-right" slot="body">
                From our work to our interview process, we break the norm. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-codemaster.jpg">
              <h3 slot="header">We want to put you to the test!</h3>
              <p slot="body">
                Instead of asking you a million questions, we'd rather get to
                know you another way - lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod.
              </p>
            </content-graphic-lg>
          </div>

          <div class="challenge">
            <div class="container">
              <div class="intro text-center">
                <h2>The Challenge</h2>
                <p>
                  Should you choose to accept, you will develop a 3-page app in
                  the ionic framework.
                </p>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-3">
                  <p>Show us your skills in:</p>
                  <ul>
                    <li>Angular</li>
                    <li>Redux</li>
                    <li>API Integration</li>
                  </ul>
                </div>
                <div class="col-sm-12 col-md-3">
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
                <div class="col-sm-12 col-md-3">
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
                <div class="col-sm-12 col-md-3">
                  <img
                    class="img-fluid"
                    src="assets/graphic-opportunities-phone.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-ionic.jpg"
              reverse={true}
            >
              <h3 class="text-right" slot="header">
                Why?
              </h3>
              <p class="text-right" slot="body">
                Because we value our partnerships. And because we are a trusted
                Ionic partner, we want lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-sword.png">
              <h3 slot="header">Are you prepared?</h3>
              <p slot="body">
                We're looking for someone who’s ready to hit the ground running
                - someone who wants to turn big ideas into realities. But first,
                we need to make sure you’ve got the skills to make it happen.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - apply */}
        <section id="apply">
          <div class="container">
            {!this.canRequestInterview ? (
              <form onSubmit={this.handleSubmit.bind(this)}>
                <h2>Show us your skills</h2>
                <p>
                  Move the sliders to the position that aligns with your
                  capabilities to continue.
                </p>

                <div class="labels">
                  <p>N00b</p>
                  <p>Expert</p>
                </div>

                <app-slider name="angular" label="Angular" />
                <app-slider name="node" label="Node" />
                <app-slider name="ionic" label="Ionic" />
                <app-slider name="html" label="HTML" />
                <app-slider name="css" label="CSS" />

                {!this.isDisabled ? (
                  <p>You're all set! Let's get started.</p>
                ) : (
                  <p>Not quite...keep sliding!</p>
                )}

                <button
                  class="btn btn-primary"
                  type="submit"
                  disabled={this.isDisabled}
                  id="requestInterview"
                >
                  Request an interview
                </button>
              </form>
            ) : (
              <div>Upload resume component will go here</div>
            )}
          </div>
        </section>
      </div>
    );
  }
}
