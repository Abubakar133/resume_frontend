import GroupComponent1 from "./GroupComponent1";
import GroupComponent3 from "./GroupComponent3";
import GroupComponent2 from "./GroupComponent2";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const ResumeTEMPLATEEDITORTheme = ({ className = "" }) => {
  return (
    <div
      className={`w-[801.2px] bg-color-5 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[39.5px] px-[52px] pb-[66.2px] box-border relative gap-[46.7px] max-w-full text-left text-[11.1px] text-[#1d1d1d] font-[Quicksand] lg:pt-[26px] lg:px-[26px] lg:pb-[43px] lg:box-border mq450:gap-[23px] mq825:pt-[20px] mq825:pb-[28px] mq825:box-border ${className}`}
    >
      <img
        className="h-[40.2px] w-[55.3px] absolute !m-[0] bottom-[86px] left-[335.5px] object-contain"
        alt=""
        src="/group-2144@2x.png"
      />
      <div className="h-[895.2px] w-[637.6px] relative shadow-[0px_0px_7.8px_rgba(0,_0,_0,_0.1)] bg-color-5 hidden max-w-full z-[1]" />
      <div className="h-[17.2px] w-[17.2px] absolute !m-[0] top-[351.1px] right-[95.2px] shadow-[0px_1.7px_11.1px_rgba(0,_0,_0,_0.05)] rounded-[50%] [background:linear-gradient(180deg,_#ff5c00,_#fbbc9a)] z-[2]" />
      <div className="w-[693.3px] flex flex-col items-start justify-start gap-[5.5px] max-w-full shrink-0">
        <div className="self-stretch flex flex-row items-start justify-start py-[0px] pl-[3px] pr-[0px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32.9px] max-w-full mq825:gap-[16px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="w-[40.1px] flex flex-col items-start justify-start pt-[8.4px] px-[0px] pb-[0px] box-border">
                <a className="[text-decoration:none] self-stretch h-[13.3px] relative tracking-[0.01em] leading-[13.4px] text-[inherit] inline-block shrink-0 whitespace-nowrap">
                  Logo
                </a>
              </div>
              <div className="h-[22.4px] w-[296.8px] flex flex-col items-start justify-start pt-[6.9px] pb-[0px] pl-[0px] pr-[12px] box-border text-3xs">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[25.1px]">
                  <div className="h-[14px] flex-1 flex flex-row items-start justify-between gap-[20px] mq825:hidden">
                    <a className="[text-decoration:none] self-stretch w-[29px] relative tracking-[0.01em] leading-[13.4px] capitalize text-[inherit] inline-block">
                      Home
                    </a>
                    <a className="[text-decoration:none] self-stretch w-[89px] relative tracking-[0.01em] leading-[13.4px] capitalize font-bold text-[inherit] inline-block whitespace-nowrap">
                      Resume Template
                    </a>
                    <a className="[text-decoration:none] self-stretch w-[32px] relative tracking-[0.01em] leading-[13.4px] capitalize text-[inherit] inline-block">
                      Pricing
                    </a>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-[1.5px] px-[0px] pb-[0px] text-[8.9px] text-color-2">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[3.1px]">
                      <img
                        className="h-[13.4px] w-[13.4px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/languagesvgrepocom-1-1.svg"
                      />
                      <a className="[text-decoration:none] self-stretch w-[26px] relative tracking-[0.01em] leading-[13.4px] capitalize text-[inherit] inline-block whitespace-nowrap">
                        EN US
                      </a>
                      <div className="flex flex-col items-start justify-start pt-[2.2px] px-[0px] pb-[0px]">
                        <img
                          className="w-[7.8px] h-[7.8px] relative rounded-[0.3px] object-contain"
                          alt=""
                          src="/polygon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-[27.8px] w-[27.8px] relative rounded-[50%] object-cover"
                alt=""
                src="/profile@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-[0px] px-[26px] box-border max-w-full text-3xs text-color-5">
              <div className="flex-1 flex flex-row items-end justify-start gap-[8.3px] max-w-full">
                <div className="w-[69.5px] rounded-[13.9px] bg-[#30b93e] flex flex-row items-start justify-start pt-[11.7px] px-[11px] pb-[11.1px] box-border gap-[5.6px]">
                  <div className="h-[42.3px] w-[69.5px] relative rounded-[13.9px] bg-[#30b93e] hidden" />
                  <img
                    className="h-[19.5px] w-[19.5px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    alt=""
                    src="/fontsvgrepocom-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.7px] px-[0px] pb-[0px]">
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] z-[1]">
                      Font
                    </a>
                  </div>
                </div>
                <div className="w-[80.7px] rounded-[13.9px] bg-[#1d1d1d] flex flex-row items-start justify-start pt-[11.7px] pb-[11.1px] pl-[11px] pr-[10px] box-border gap-[5.6px]">
                  <div className="h-[42.3px] w-[80.7px] relative rounded-[13.9px] bg-[#1d1d1d] hidden" />
                  <img
                    className="h-[19.5px] w-[19.5px] relative overflow-hidden shrink-0 min-h-[20px] z-[1]"
                    alt=""
                    src="/colorsvgrepocom-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.7px] px-[0px] pb-[0px]">
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] z-[1]">
                      Theme
                    </a>
                  </div>
                </div>
                <div className="h-[42.3px] rounded-[13.9px] bg-[#30b93e] flex flex-row items-start justify-start pt-[14.4px] pb-[13.9px] pl-[13px] pr-[12px] box-border gap-[5.6px]">
                  <div className="h-[42.3px] w-[79.6px] relative rounded-[13.9px] bg-[#30b93e] hidden" />
                  <img
                    className="h-[13.9px] w-[13.9px] relative overflow-hidden shrink-0 min-h-[14px] z-[1]"
                    alt=""
                    src="/layoutsvgrepocom-1.svg"
                  />
                  <a className="[text-decoration:none] self-stretch w-[34px] relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] inline-block z-[1]">
                    Layout
                  </a>
                </div>
                <div className="w-[84px] rounded-[13.9px] bg-[#30b93e] flex flex-row items-start justify-start py-[12.8px] pl-[11px] pr-[10px] box-border gap-[5.5px]">
                  <div className="h-[42.3px] w-[84px] relative rounded-[13.9px] bg-[#30b93e] hidden" />
                  <img
                    className="h-[16.7px] w-[16.7px] relative overflow-hidden shrink-0 min-h-[17px] z-[1]"
                    alt=""
                    src="/settingssvgrepocom-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.6px] px-[0px] pb-[0px]">
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] z-[1]">
                      Settings
                    </a>
                  </div>
                </div>
                <div className="flex-1 rounded-[13.9px] bg-[#30b93e] flex flex-row items-start justify-start py-[12.8px] pl-[11px] pr-[10px] gap-[5.6px]">
                  <div className="h-[42.3px] w-[130.2px] relative rounded-[13.9px] bg-[#30b93e] hidden" />
                  <img
                    className="h-[16.7px] w-[16.7px] relative overflow-hidden shrink-0 min-h-[17px] z-[1]"
                    alt=""
                    src="/exchangechangesvgrepocom-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.6px] px-[0px] pb-[0px]">
                    <a className="[text-decoration:none] self-stretch relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] whitespace-nowrap z-[1]">
                      Change Template
                    </a>
                  </div>
                </div>
                <div className="w-[68.5px] flex flex-col items-start justify-start py-[0px] pl-[0px] pr-[14px] box-border">
                  <img
                    className="self-stretch h-[42.3px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/previousnext.svg"
                  />
                </div>
                <div className="w-[75.1px] flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[7.1px] box-border text-[8.9px]">
                  <div className="self-stretch h-[27.4px] rounded-[13.4px] bg-[#ff5c00] flex flex-row items-start justify-start pt-[6.6px] px-[15px] pb-[6.8px] box-border">
                    <a className="[text-decoration:none] self-stretch flex-1 relative tracking-[0.01em] leading-[13.4px] font-bold text-[inherit]">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[667.1px] flex flex-row items-start justify-start flex-wrap content-start gap-[12.3px] max-w-full text-[13.4px]">
          <div className="flex flex-col items-start justify-start pt-[89.6px] px-[0px] pb-[0px]">
            <div className="w-[17.2px] h-[17.2px] relative shadow-[0px_1.7px_11.1px_rgba(0,_0,_0,_0.05)] rounded-[50%] [background:linear-gradient(180deg,_#ff5c00,_#fbbc9a)] shrink-0" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-[11.2px] px-[0px] pb-[0px] box-border relative min-w-[415px] shrink-0 max-w-full lg:min-w-full mq450:min-w-full mq825:min-w-full mq1425:min-w-full">
            <a className="[text-decoration:none] w-[75px] relative tracking-[0.01em] leading-[13.4px] font-semibold text-[inherit] inline-block shrink-0">
              My Resume
            </a>
            <div className="flex-1 flex flex-col items-start justify-start pt-[24.4px] px-[0px] pb-[0px] box-border max-w-full shrink-0 ml-[-75px] text-[7.5px] text-[#999] font-[Poppins]">
              <div className="self-stretch bg-color-5 overflow-hidden flex flex-row items-start justify-start pt-[72.3px] pb-[55.7px] pl-[47px] pr-[0px] box-border relative gap-[20.7px] shrink-0 max-w-full z-[3] lg:flex-wrap lg:pt-[24.4px] lg:px-[20px] lg:pb-[36px] lg:box-border mq450:pb-[23px] mq450:box-border">
                <div className="w-[240px] !m-[0] absolute top-[0px] left-[397.6px] flex flex-row items-start justify-start">
                  <img
                    className="h-[895.2px] flex-1 relative max-w-full overflow-hidden"
                    alt=""
                    src="/rectangle-1.svg"
                  />
                  <img
                    className="h-[250px] w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden z-[1]"
                    alt=""
                    src="/rectangle-14.svg"
                  />
                  <div className="h-[117.3px] w-[117.3px] absolute !m-[0] top-[330.6px] left-[27.7px] rounded-[1.3px] border-color-5 border-[1.3px] border-solid box-border z-[1]" />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[51.2px] min-w-[227px] max-w-full mq450:gap-[26px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                        <GroupComponent1
                          propAlignSelf="unset"
                          propFlex="unset"
                          propHeight="17.8px"
                          propWidth="110.5px"
                          propWidth1="unset"
                          propFlex1="1"
                          eDUCATION="WORK EXPERIENCE"
                          propFontSize="47px"
                          propColor="#42489e"
                          propFontWeight="700"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-[7.3px] px-[0px] pb-[0px] box-border min-w-[141px]">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4]" />
                        </div>
                      </div>
                      <div className="w-[292.1px] flex flex-col items-start justify-start gap-[17.4px]">
                        <GroupComponent3 workDescription="Work Descripton" />
                        <GroupComponent3 workDescription="Work Description" />
                        <GroupComponent3 workDescription="Work Description" />
                      </div>
                    </div>
                    <div className="self-stretch h-[124.5px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[106.5px] box-border gap-[24.7px] text-[11.8px] text-[#42489e] lg:h-auto">
                      <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] lg:flex-wrap">
                        <a className="[text-decoration:none] h-[18px] w-[66px] relative tracking-[0.01em] font-bold text-[inherit] inline-block">
                          PRO SKILLS
                        </a>
                        <div className="w-[217.5px] flex flex-col items-start justify-start pt-[9.5px] px-[0px] pb-[0px] box-border">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4]" />
                        </div>
                      </div>
                      <div className="w-[316.1px] flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[5.5px] box-border gap-[24.9px] shrink-0 text-[7.5px] text-[#333]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[40.5px] mq450:gap-[20px] mq450:flex-wrap">
                          <GroupComponent2
                            mSWORD="Skill 1"
                            rectangleDiv
                            rectangleDiv1
                            showRectangleDiv
                          />
                          <GroupComponent2
                            mSWORD="Skill 4"
                            rectangleDiv
                            rectangleDiv1
                            showRectangleDiv
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[40.5px] mq450:gap-[20px] mq450:flex-wrap">
                          <GroupComponent2
                            mSWORD="Skill 2"
                            rectangleDiv={false}
                            rectangleDiv1={false}
                            showRectangleDiv
                          />
                          <GroupComponent2
                            mSWORD="Skill 5"
                            rectangleDiv
                            rectangleDiv1
                            showRectangleDiv
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[40.5px] mq450:gap-[20px] mq450:flex-wrap">
                          <GroupComponent2
                            mSWORD="Skill 3"
                            rectangleDiv={false}
                            rectangleDiv1
                            showRectangleDiv={false}
                          />
                          <GroupComponent2
                            mSWORD="Skill 6"
                            rectangleDiv
                            rectangleDiv1
                            showRectangleDiv
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[35px] text-justify text-[8.3px] text-[#666] font-[Roboto] mq450:gap-[17px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] shrink-0">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[21.2px] mq450:flex-wrap">
                        <GroupComponent1
                          propAlignSelf="unset"
                          propFlex="unset"
                          propHeight="17.8px"
                          propWidth="110.5px"
                          propWidth1="52px"
                          propFlex1="unset"
                          eDUCATION="HOBBIES"
                          propFontSize="47px"
                          propColor="#42489e"
                          propFontWeight="700"
                        />
                        <div className="flex-1 flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[7.5px] box-border min-w-[141px]">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4]" />
                        </div>
                      </div>
                      <div className="w-[279.8px] h-[47px] relative tracking-[0.03em] leading-[170%] flex items-center shrink-0">
                        <span className="w-full">
                          <p className="m-[0px]">
                            Write about what you love to do
                          </p>
                          <p className="m-[0px]">asides work.</p>
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24.8px] shrink-0 text-left text-[11.8px] text-[#42489e] font-[Poppins]">
                      <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[20px] lg:flex-wrap">
                        <a className="[text-decoration:none] h-[18px] w-[70px] relative tracking-[0.01em] font-bold text-[inherit] inline-block">
                          FOLLOW ME
                        </a>
                        <div className="w-[217.5px] flex flex-col items-start justify-start pt-[6px] px-[0px] pb-[0px] box-border">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4]" />
                        </div>
                      </div>
                      <div className="w-[293.3px] flex flex-col items-start justify-start gap-[13px] shrink-0 text-[7.5px] text-[#333]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[46.8px] mq450:gap-[23px] mq450:flex-wrap">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[20px] min-w-[88px]">
                            <div className="h-[12px] w-[12px] relative">
                              <div className="absolute h-[12px] w-[12px] top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e]">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e] hidden" />
                                <img
                                  className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] max-w-full overflow-hidden max-h-full z-[1]"
                                  alt=""
                                  src="/icon.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                              <a className="[text-decoration:none] self-stretch h-[8px] relative tracking-[0.01em] font-medium text-[inherit] inline-block shrink-0">
                                Select Media Handle
                              </a>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                            <div className="flex flex-row items-start justify-start gap-[20px]">
                              <div className="h-[12px] w-[12px] relative rounded-[6px] bg-[#42489e]">
                                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e] hidden" />
                                <img
                                  className="absolute h-[41.67%] w-[66.67%] top-[29.17%] right-[14.17%] bottom-[29.17%] left-[19.17%] max-w-full overflow-hidden max-h-full z-[1]"
                                  alt=""
                                  src="/vector-1.svg"
                                />
                              </div>
                              <a className="[text-decoration:none] w-[79px] relative tracking-[0.01em] font-medium text-[inherit] inline-block">
                                Select Media Handle
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                          <div className="flex flex-row items-start justify-start gap-[20px]">
                            <div className="h-[12px] w-[12px] relative rounded-[6px] bg-[#42489e]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e] hidden" />
                              <img
                                className="absolute h-[48.33%] w-3/5 top-[26.67%] right-[19.17%] bottom-[25%] left-[20.83%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                            </div>
                            <a className="[text-decoration:none] w-[79px] relative tracking-[0.01em] font-medium text-[inherit] inline-block">
                              Select Media Handle
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                            <div className="flex flex-row items-start justify-start gap-[20px]">
                              <div className="h-[12px] w-[12px] relative">
                                <div className="absolute h-[12px] w-[12px] top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e]">
                                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[6px] bg-[#42489e] hidden" />
                                  <img
                                    className="absolute h-[70.83%] w-[70.83%] top-[14.17%] right-[15%] bottom-[15%] left-[14.17%] max-w-full overflow-hidden max-h-full z-[1]"
                                    alt=""
                                    src="/vector-2.svg"
                                  />
                                </div>
                              </div>
                              <a className="[text-decoration:none] w-[79px] relative tracking-[0.01em] font-medium text-[inherit] inline-block">
                                Select Media Handle
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[767.2px] w-[219.4px] flex flex-col items-start justify-start pt-[2.8px] px-[0px] pb-[0px] box-border min-w-[219.4px] text-[8.8px] text-color-5 font-[Roboto] lg:flex-1">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[74.5px]">
                    <div className="self-stretch h-[173px] flex flex-col items-start justify-start gap-[32.7px]">
                      <div className="self-stretch h-[10px] flex flex-row items-start justify-start gap-[20.6px]">
                        <a className="[text-decoration:none] self-stretch w-[120px] relative tracking-[0.01em] text-[inherit] inline-block z-[1]">
                          Professional Title e.g Designer
                        </a>
                        <div className="w-[78.8px] flex flex-col items-start justify-start pt-[3.7px] px-[0px] pb-[0px] box-border">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4] z-[1]" />
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[24.5px] text-xl">
                        <div className="h-[23px] flex flex-row items-start justify-start gap-[4.8px] z-[1]">
                          <a className="[text-decoration:none] self-stretch w-[71px] relative tracking-[0.01em] font-black text-[inherit] inline-block shrink-0 mq450:text-base">{`JUSTIN `}</a>
                          <a className="[text-decoration:none] self-stretch w-[80px] relative tracking-[0.01em] font-light text-[#a9a9a9] inline-block shrink-0 mq450:text-base">
                            NGUYEN
                          </a>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[14.3px] z-[1] text-[8.8px] text-[#f2f2f2]">
                          <div className="flex-1 flex flex-row items-start justify-start gap-[7.2px]">
                            <div className="flex flex-col items-start justify-start pt-[2px] px-[0px] pb-[0px]">
                              <img
                                className="w-[6.3px] h-[6.3px] relative"
                                alt=""
                                src="/vector-3.svg"
                              />
                            </div>
                            <a className="[text-decoration:none] self-stretch w-[75px] relative tracking-[0.05em] text-[inherit] inline-block">
                              0804 - 969 - 8797
                            </a>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[6.7px]">
                            <div className="flex flex-col items-start justify-start pt-[2.1px] px-[0px] pb-[0px]">
                              <img
                                className="w-[7.1px] h-[5.7px] relative shrink-0"
                                alt=""
                                src="/vector-4.svg"
                              />
                            </div>
                            <a className="[text-decoration:none] self-stretch w-[119px] relative tracking-[0.05em] text-[inherit] inline-block shrink-0 whitespace-nowrap">
                              justinnguyen23@gmail.com
                            </a>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start gap-[7.7px]">
                            <div className="flex flex-col items-start justify-start pt-[1.5px] px-[0px] pb-[0px]">
                              <img
                                className="w-[5.2px] h-[7.2px] relative"
                                alt=""
                                src="/vector-5.svg"
                              />
                            </div>
                            <a className="[text-decoration:none] self-stretch w-[35px] relative tracking-[0.05em] text-[inherit] inline-block">
                              Address
                            </a>
                          </div>
                          <div className="flex-1 flex flex-row items-start justify-start py-[0px] px-[1px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[7.9px]">
                              <div className="flex flex-col items-start justify-start pt-[1.2px] px-[0px] pb-[0px]">
                                <img
                                  className="w-[4.9px] h-[7.8px] relative shrink-0"
                                  alt=""
                                  src="/vector-6.svg"
                                />
                              </div>
                              <a className="[text-decoration:none] self-stretch w-[37px] relative tracking-[0.05em] text-[inherit] inline-block shrink-0">
                                Location
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[179.8px] flex-1 flex flex-col items-start justify-start gap-[32.5px] text-[8.3px]">
                      <img
                        className="w-[113.8px] h-[113.8px] relative z-[2]"
                        alt=""
                        src="/group-42.svg"
                      />
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[0px] px-[0px] pb-[0.1px] gap-[21.1px] z-[1]">
                        <img
                          className="w-[15.6px] h-[13.1px] relative"
                          alt=""
                          src="/.svg"
                        />
                        <div className="self-stretch flex-1 relative tracking-[0.03em] leading-[170%]">
                          <p className="m-[0px]">{`Lorem ipsum dolor sit amet, consecteturttt adipiscing elit, sed do eiusmod tempor uttt incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudddd exercitation ullamco laboris nisi ut aliquipt `}</p>
                          <p className="m-[0px]">
                            ea commodo consequat. Duis aute irure do
                          </p>
                          <p className="m-[0px]">
                            in reprehenderit in voluptate velit esseeeee
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[20.2px] z-[2] text-[11.8px] font-[Poppins]">
                      <div className="self-stretch h-[17.8px] flex flex-row items-end justify-start gap-[30.1px] shrink-0">
                        <GroupComponent1 eDUCATION="EDUCATION" />
                        <div className="w-[78.8px] flex flex-col items-start justify-end pt-[0px] px-[0px] pb-[7.6px] box-border">
                          <div className="self-stretch h-[2.5px] relative bg-[#c4c4c4]" />
                        </div>
                      </div>
                      <div className="w-[205.8px] flex flex-col items-start justify-start gap-[7.7px] shrink-0 text-[7.5px]">
                        <GroupComponent aSINBUSINESSMANAGEMENT="Qualification" />
                        <GroupComponent aSINBUSINESSMANAGEMENT="Qualification " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[287.1px] w-[246.5px] !m-[0] absolute top-[0px] left-[77.9px] rounded-[2.8px] bg-[#1d1d1d] flex flex-col items-start justify-start pt-[21.2px] px-[26px] pb-[24.4px] box-border gap-[5.1px] z-[4] text-[8.9px] text-color-5 font-[Inter]">
              <div className="w-[246.5px] h-[287.1px] relative rounded-[2.8px] bg-[#1d1d1d] hidden" />
              <div className="w-[30px] h-[18.2px] flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[6.2px] box-border text-3xs">
                <a className="[text-decoration:none] self-stretch flex-1 relative tracking-[0.05em] font-black text-[inherit] z-[5]">
                  Color
                </a>
              </div>
              <a className="[text-decoration:none] w-[55px] h-[11px] relative tracking-[0.05em] font-bold text-[inherit] inline-block z-[5]">
                Free Colors
              </a>
              <div className="self-stretch flex flex-row items-start justify-start pt-[0px] px-[0px] pb-[17.1px] gap-[14.8px]">
                <div className="h-[33.4px] flex-1 relative rounded-[2.8px] border-color-5 border-[1.1px] border-solid box-border z-[2]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#9b9b9b] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#6c5ca8] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                  <div className="absolute top-[0px] left-[0px] rounded-[2.8px] border-color-5 border-[1.1px] border-solid box-border w-full h-full hidden z-[2]" />
                </div>
                <div className="h-[33.4px] flex-1 relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#3a3a3a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.5px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#fbbc9a] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] flex-1 relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#3a3a3a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#ff5c00] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
              </div>
              <a className="[text-decoration:none] w-[76px] h-[11px] relative tracking-[0.05em] font-bold text-[inherit] inline-block z-[5]">
                Premium Colors
              </a>
              <div className="self-stretch flex-1 flex flex-row items-start justify-start flex-wrap content-start pt-[0px] px-[0px] pb-[9.9px] gap-x-[14.8px] gap-y-[12.8px]">
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-color-2 w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#92ea9b] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#958a8a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.5px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#377dff] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#666060] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#ff2d2d] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#666] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#9700de] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#0d0d0d] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.5px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#24f739] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] w-[54px] relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#3a3a3a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#fda741] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[14.8px]">
                <div className="h-[33.4px] flex-1 relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#3a3a3a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#0b59a1] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] flex-1 relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#3a3a3a] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.5px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#ffa800] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
                <div className="h-[33.4px] flex-1 relative z-[5]">
                  <div className="absolute top-[0px] left-[0px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#4d4646] w-[27.3px] h-[33.4px]" />
                  <div className="absolute top-[33.4px] left-[54.6px] rounded-tl-[2.78px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[2.78px] bg-[#4025a6] w-[27.3px] h-[33.4px] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[39.5px] w-[54.8px] absolute !m-[0] bottom-[285.4px] left-[39px] z-[2]"
        alt=""
        src="/group-2144-1.svg"
      />
      <div className="flex flex-col items-start justify-start pt-[116.9px] px-[0px] pb-[0px]">
        <div className="w-[17.2px] h-[17.2px] relative shadow-[0px_1.7px_11.1px_rgba(0,_0,_0,_0.05)] rounded-[50%] [background:linear-gradient(180deg,_#92ea9b,_#30b93e)]" />
      </div>
    </div>
  );
};

ResumeTEMPLATEEDITORTheme.propTypes = {
  className: PropTypes.string,
};

export default ResumeTEMPLATEEDITORTheme;
