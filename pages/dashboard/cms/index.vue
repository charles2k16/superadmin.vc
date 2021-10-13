<template>
  <div class="container">
    <c-heading marginBottom="20px">Explanations</c-heading>
    <c-tabs>
      <c-tab-list>
        <c-tab>Foundation</c-tab>
        <c-tab>Business Model</c-tab>
        <c-tab>Competition</c-tab>
        <c-tab>Market Potential</c-tab>
        <c-tab>Risk Assessment</c-tab>
      </c-tab-list>
      <c-tab-panels>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>Vision</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Vision', data.vision)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.vision.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>Belief</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Belief', data.belief)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.belief.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>Values</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Values', data.values)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.values.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>Culture</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Culture', data.culture)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.culture.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Sustainable Development Goals</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Sustainable Development Goals', data.sdg)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.sdg.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Skills and Competence</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Skills and Competence', data.skills)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.skills.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Market Goals</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Market Goals', data.market_goals)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.market_goals.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Traction</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Traction', data.traction)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.traction.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Overall Problem </b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Overall Problem', data.overall_problem)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.overall_problem.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Overall Solution</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Overall Solution', data.overall_solution)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.overall_solution.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Overall Value Proposition</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="
                    openModal(
                      'Overall Value Proposition',
                      data.overall_value_proposition
                    )
                  "
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.overall_value_proposition.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Customer Segment</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Customer Segment', data.customer_segment)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.customer_segment.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>Channels</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Channels', data.channels)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.channels.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Key Resources</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Key Resources', data.key_resources)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.key_resources.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Key Activities</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Key Activities', data.key_activities)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.key_activities.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Key Partners</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Key Partners', data.key_partners)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.key_partners.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Revenue</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Revenue', data.revenue)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.revenue.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Costs</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Costs', data.costs)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.costs.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Point of Differentiation </b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="
                    openModal(
                      'Point of Differentiation',
                      data.point_of_differentiation
                    )
                  "
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.point_of_differentiation.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Competition</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Competition', data.competitor)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.competitor.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Comparison</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Comparison', data.comparison)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.comparison.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Go to Market Strategy </b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="
                    openModal(
                      'Go to Market Strategy',
                      data.go_to_market_strategy
                    )
                  "
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.go_to_market_strategy.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Overview</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Overview', data.overview)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.overview.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>TAM</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('TAM', data.tam)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.tam.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>SAM</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('SAM', data.sam)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.sam.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left"> <b>SOM</b> </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('SOM', data.som)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.som.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>SWOT </b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('SWOT', data.swot)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.swot.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>PESTLE</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('PESTLE', data.pestle)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.pestle.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Risk Analysis</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openModal('Risk Analysis', data.risk_analysis)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <div v-html="data.risk_analysis.content"></div>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
      </c-tab-panels>
    </c-tabs>
    <br />
    <br />
    <c-heading marginBottom="20px">Step by Step Tour</c-heading>
    <c-tabs>
      <c-tab-list>
        <c-tab>Step 1 - Idea</c-tab>
        <c-tab>Step 2 - Business Ready</c-tab>
        <c-tab>Step 3 - Market Plan</c-tab>
      </c-tab-list>
      <c-tab-panels>
        <c-tab-panel>
          <c-accordion v-if="data.tour">
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Main description</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(data.tour[0], true)"
                  >Edit</c-button
                >
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <ul>
                  <li
                    v-for="(description, index) in data.tour[0].descriptions"
                    :key="index"
                  >
                    {{ description }}
                  </li>
                </ul>
                <br />
                <h6><b>Time</b></h6>
                {{ data.tour[0].time }}
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item
              v-for="(step, index) in data.tour[0].tour_steps"
              :key="index"
            >
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>{{ step.title }}</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(step)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <template v-if="step.descriptions">
                  <h6><b>Descriptions</b></h6>
                  <ul>
                    <li
                      v-for="(description, index) in step.descriptions"
                      :key="index"
                    >
                      {{ description }}
                    </li>
                  </ul>
                </template>
                <br />
                <h6><b>Tour Content</b></h6>
                {{ step.description }}
                <br />
                <br />
                <h6><b>Time</b></h6>
                {{ step.time }}
                 <c-accordion v-if="step.tour_steps.length">
                  <c-accordion-item
                    v-for="(nestedStep, index) in step.tour_steps"
                    :key="index"
                  >
                    <c-accordion-header>
                      <c-box flex="1" text-align="left">
                        <b>{{ nestedStep.title }}</b>
                      </c-box>
                      <c-button
                        size="xs"
                        variant-color="yellow"
                        @click="openEditTour(nestedStep)"
                        >Edit</c-button
                      >
                      <c-accordion-icon />
                    </c-accordion-header>
                    <c-accordion-panel pb="4">
                      <template v-if="nestedStep.descriptions">
                        <h6><b>Descriptions</b></h6>
                        <ul>
                          <li
                            v-for="(
                              description, index
                            ) in nestedStep.descriptions"
                            :key="index"
                          >
                            {{ description }}
                          </li>
                        </ul>
                      </template>
                      <br />
                      <h6><b>Tour Content</b></h6>
                      {{ nestedStep.description }}
                      <br />
                      <h6><b>Time</b></h6>
                      {{ nestedStep.time }}
                    </c-accordion-panel>
                  </c-accordion-item>
                </c-accordion>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Main description</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(data.tour[1], true)"
                  >Edit</c-button
                >
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <ul>
                  <li
                    v-for="(description, index) in data.tour[1].descriptions"
                    :key="index"
                  >
                    {{ description }}
                  </li>
                </ul>
                <br />
                <h6><b>Time</b></h6>
                {{ data.tour[1].time }}
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item
              v-for="(step, index) in data.tour[1].tour_steps"
              :key="index"
            >
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>{{ step.title }}</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(step)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <template v-if="step.descriptions">
                  <h6><b>Descriptions</b></h6>
                  <ul>
                    <li
                      v-for="(description, index) in step.descriptions"
                      :key="index"
                    >
                      {{ description }}
                    </li>
                  </ul>
                </template>
                <br />
                <h6><b>Tour Content</b></h6>
                {{ step.description }}
                <br />
                <h6><b>Time</b></h6>
                {{ step.time }}
                <c-accordion v-if="step.tour_steps.length">
                  <c-accordion-item
                    v-for="(nestedStep, index) in step.tour_steps"
                    :key="index"
                  >
                    <c-accordion-header>
                      <c-box flex="1" text-align="left">
                        <b>{{ nestedStep.title }}</b>
                      </c-box>
                      <c-button
                        size="xs"
                        variant-color="yellow"
                        @click="openEditTour(nestedStep)"
                        >Edit</c-button
                      >
                      <c-accordion-icon />
                    </c-accordion-header>
                    <c-accordion-panel pb="4">
                      <template v-if="nestedStep.descriptions">
                        <h6><b>Descriptions</b></h6>
                        <ul>
                          <li
                            v-for="(
                              description, index
                            ) in nestedStep.descriptions"
                            :key="index"
                          >
                            {{ description }}
                          </li>
                        </ul>
                      </template>
                      <br />
                      <h6><b>Tour Content</b></h6>
                      {{ nestedStep.description }}
                      <br />
                      <h6><b>Time</b></h6>
                      {{ nestedStep.time }}
                    </c-accordion-panel>
                  </c-accordion-item>
                </c-accordion>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
        <c-tab-panel>
          <c-accordion>
            <c-accordion-item>
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>Main description</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(data.tour[2], true)"
                  >Edit</c-button
                >
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <ul>
                  <li
                    v-for="(description, index) in data.tour[2].descriptions"
                    :key="index"
                  >
                    {{ description }}
                  </li>
                </ul>
                <br />
                <h6><b>Time</b></h6>
                {{ data.tour[2].time }}
              </c-accordion-panel>
            </c-accordion-item>
            <c-accordion-item
              v-for="(step, index) in data.tour[2].tour_steps"
              :key="index"
            >
              <c-accordion-header>
                <c-box flex="1" text-align="left">
                  <b>{{ step.title }}</b>
                </c-box>
                <c-button
                  size="xs"
                  variant-color="yellow"
                  @click="openEditTour(step)"
                  >Edit</c-button
                >
                <c-accordion-icon />
              </c-accordion-header>
              <c-accordion-panel pb="4">
                <template v-if="step.descriptions">
                  <h6><b>Descriptions</b></h6>
                  <ul>
                    <li
                      v-for="(description, index) in step.descriptions"
                      :key="index"
                    >
                      {{ description }}
                    </li>
                  </ul>
                </template>
                <br />
                <h6><b>Tour Content</b></h6>
                {{ step.description }}
                <br />
                <h6><b>Time</b></h6>
                {{ step.time }}

                 <c-accordion v-if="step.tour_steps.length">
                  <c-accordion-item
                    v-for="(nestedStep, index) in step.tour_steps"
                    :key="index"
                  >
                    <c-accordion-header>
                      <c-box flex="1" text-align="left">
                        <b>{{ nestedStep.title }}</b>
                      </c-box>
                      <c-button
                        size="xs"
                        variant-color="yellow"
                        @click="openEditTour(nestedStep)"
                        >Edit</c-button
                      >
                      <c-accordion-icon />
                    </c-accordion-header>
                    <c-accordion-panel pb="4">
                      <template v-if="nestedStep.descriptions">
                        <h6><b>Descriptions</b></h6>
                        <ul>
                          <li
                            v-for="(
                              description, index
                            ) in nestedStep.descriptions"
                            :key="index"
                          >
                            {{ description }}
                          </li>
                        </ul>
                      </template>
                      <br />
                      <h6><b>Tour Content</b></h6>
                      {{ nestedStep.description }}
                      <br />
                      <h6><b>Time</b></h6>
                      {{ nestedStep.time }}
                    </c-accordion-panel>
                  </c-accordion-item>
                </c-accordion>
              </c-accordion-panel>
            </c-accordion-item>
          </c-accordion>
        </c-tab-panel>
      </c-tab-panels>
    </c-tabs>
    <c-modal
      :is-open="isOpenModal"
      :on-close="closeModal"
      :closeOnOverlayClick="false"
      size="xl"
    >
      <c-modal-content ref="content">
        <c-modal-header>{{ modalTitle }}</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <client-only>
            <quill-editor
              ref="editor"
              v-model="content"
              :options="editorOption"
            />
          </client-only>
        </c-modal-body>
        <c-modal-footer>
          <c-button @click="saveExplanation" variant-color="blue" mr="3">
            Save
          </c-button>
          <c-button @click="closeModal">Close</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
    <c-modal
      :is-open="editTourDataShow"
      :on-close="closeEditTourModal"
      :closeOnOverlayClick="false"
      size="xl"
    >
      <c-modal-content ref="content">
        <c-modal-header>Edit {{ editTourData.title }}</c-modal-header>
        <c-modal-close-button />
        <c-modal-body>
          <c-stack spacing="5">
            <c-list spacing="5">
              <c-list-item
                v-for="(desc, index) of editTourData.descriptions"
                :key="index"
              >
                {{ desc }}
                <c-close-button
                  @click="removeDesc(editTourData.descriptions, index)"
                  size="sm"
                />
              </c-list-item>
            </c-list>
            <label>
              <b>Add description</b>
              <c-textarea v-model="addDescData" />
              <c-button
                @click="addDesc(editTourData.descriptions, addDescData)"
                variant-color="green"
                size="xs"
              >
                Add
              </c-button>
            </label>
            <label v-if="!isMainEdit">
              <b>Tour Content</b>
              <c-textarea
                :value="editTourData.description"
                v-model="editTourData.description"
              ></c-textarea>
            </label>
            <label>
              <b>Time</b>
              <c-input v-model="editTourData.time" size="md" />
            </label>
             <label v-if="!isMainEdit">
              <b>Position</b>
              <c-input type="number" v-model.number="editTourData.position" size="md" />
            </label>
          </c-stack>
        </c-modal-body>
        <c-modal-footer>
          <c-button
            @click="saveTourData(editTourData, isMainEdit)"
            variant-color="blue"
            mr="3"
          >
            Save
          </c-button>
          <c-button @click="closeEditTourModal">Close</c-button>
        </c-modal-footer>
      </c-modal-content>
      <c-modal-overlay />
    </c-modal>
  </div>
</template>

<script lang="js">

import explanationQuery from "~/graphql/queries/explanations.gql";
import tourQuery from "~/graphql/queries/tour.gql";
import editExplanation from "~/graphql/mutations/editExplanation.gql";
import editTourStep from "~/graphql/mutations/editTourStep.gql";
import editTour from "~/graphql/mutations/editTour.gql";
import editor from "~/components/editor"

export default {
  name: 'App',
  components: {
    editor
  },
  layout: 'dashboard',
  data () {
    return {
      data : {
        explanation : {},
        tour : []
      },
      counts : {},
      posts : [],
      comments : [],
      tags : [],
      isOpenModal : false,
      isMainEdit : false,
      modalTitle : "",
      editId : null,
      content: '<p>I am Example</p>',
      editTourData : { 
        title : "",
        description : "",
        descriptions : []
      },
      addDescData : "",
      editTourDataShow : false,
      editorOption: {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ size: ['small', false, 'large', 'huge'] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['video']
            ]
          }
        }
      }
  },
  async asyncData({app, params}){
    const apolloClient = app.apolloProvider.defaultClient
    const data = {}
    const explanations =  (await apolloClient.query({query : explanationQuery})).data.explanation;
    explanations.map(expl => {data[expl.type] = expl});
    const tour = (await apolloClient.query({query : tourQuery})).data.tour;
    data.tour = tour.sort();
    console.log(data);
    return {
      data 
    }
  },
  computed: {
  },
  methods: {
    getExplanations(){
      this.$apollo.query({query : explanationQuery, fetchPolicy : 'no-cache'} )
        .then(({ data }) => {
          data.explanation.map(expl => {
            this.data[expl.type] = expl
          })
        })
    },
    openModal(title, data){
      this.modalTitle = `Edit ${title} Explanation`;
      this.content = data.content;
      this.editId = data.id;
      this.isOpenModal = true;
    },
    openEditTour(data, mainEdit = false){
      this.editTourData = data
      this.editTourDataShow = true;
      this.isMainEdit = mainEdit;
    },
    saveExplanation(){
      const id = this.editId;
      const content = this.content;
      this.$apollo.mutate({mutation : editExplanation, variables : {id, content}})
        .then(({data})=>{
          this.isOpenModal = false;
          this.getExplanations();
      })
    },
    closeModal(){
      this.isOpenModal = false;
    },
     closeEditTourModal(){
      this.editTourDataShow = false;
      console.log("=============close");
      this.addDescData = "";
    },
    saveTourData({description, descriptions, time, id, position}, mainEdit = false){
      this.editTourDataShow = false;
      if(mainEdit){
        this.$apollo.mutate({mutation : editTour, variables : {id, descriptions, time}})
        .then(({data})=>{
          console.log(data);
        });
      }else{
        this.$apollo.mutate({mutation : editTourStep, variables : {id, descriptions, description, position, time}})
        .then(({data})=>{});
      }
      
    },
    removeDesc(desc,index){
      desc.splice(index, 1)
    },
    addDesc(desc,data){
      desc.push(data);
      this.addDescData = "";
    }
  }
}
</script>
