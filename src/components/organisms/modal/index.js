import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import {
  BookingTypeData,
  CanadaLocation,
  ServiceBooking,
  TimeSlot,
  USLocation,
} from "@/constants/data";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Calendar from "react-calendar";
import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import dayjs from "dayjs";

export const ModalBooking = () => {
  // useState
  const [bookingType, setBookingType] = useState("");
  const [locationType, setLocationType] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [stepName, setStepName] = useState(1);
  const [value, onChange] = useState(new Date());
  const [minDate, setMinDate] = useState(new Date());
  const [slotSelect, setSlotSelect] = useState("");
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
  });
  const [result, setResult] = useState([]);

  console.log("input", input);

  //useEffect
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
    onChange(tomorrow);
  }, []);

  // Modal custom styles
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      zIndex: 10 
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "800px",
      borderRadius: "0px",
      padding: "30px 80px 42px",
      zIndex: "10",
    },
  };

  // prev step
  const prevStep = () => {
    setStepName(stepName - 1);
  };

  // booking type
  const handleClick = (vals) => {
    setBookingType(vals);
  };

  // location
  const locationClick = (vals) => {
    setLocationType(vals);
  };

  // service
  const serviceClick = (vals) => {
    setServiceType(vals);
  };

  // time slot
  const handleSelect = (slot) => {
    setSlotSelect(slot);
  };

  // form handle change
  const handleChange = (name, val) => {
    setInput({
      ...input,
      [name]: val,
    });
  };

  // close modal
  const handleCloseModal = () => {
    setIsOpen(false);
    setStepName(1);
    setBookingType("");
    setLocationType("");
    setServiceType("");
    setSlotSelect("");
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
    onChange(tomorrow);
    setInput({
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
    });
  }

  // selected day
  const selectedDay = value.getDay();
  const timeSlot = TimeSlot.find((slot) => slot.id === selectedDay);
  console.log("timeSlot", timeSlot);

  
  // form submit
  const handleSubmit = () => {

    if (stepName === 1 && !bookingType) {
      alert ("Please select Booking type")
    } else if (stepName === 2 && !locationType) {
      alert ("Please select Location")
    } else if (stepName === 3 && !serviceType) {
      alert ("Please select Service")
    } else if (stepName === 4 && !slotSelect) {
      alert ("Please select Time slot")
    } else if (stepName === 5 && !input.firstname) {
      alert ("First Name is required") 
    } else if (stepName === 5 && !input.lastname) {
      alert ("Last Name is required") 
    } else if (stepName === 5 && !input.phone) {
      alert ("Phone is required") 
    } else if (stepName === 5 && !input.email) {
      alert ("Email is required") 
    } else {
      setStepName(stepName + 1)
    } 
    
    if (stepName === 5) {
      setResult([...result, input])
    } else if (stepName === 6) {
      handleCloseModal()
    } else {
      ""
    }
    
  };

  // format time
  const appointedData = dayjs(value).format("MMM DD, YYYY");
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="bg-black font-roboto text-white py-[12px] px-[20px] text-sm z-10"
      >
        Book Now
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <button
          onClick={handleCloseModal}
          className="absolute right-0 top-0"
        >
          <IoIosClose fontSize="45px" color="#7f7f7f" />
        </button>
        <div>
          <h2 className="text-center text-umber font-arizona text-[35px] uppercase">
            Book a call
          </h2>
          <p className="my-5 text-center font-nuckle text-xl">
            {
              stepName === 1
              ? "What are you looking for?"
              : stepName === 2
              ? "Which one of our locations is closest to you?"
              : stepName === 3
              ? "Which of our services are you interested in?"
              : stepName === 4
              ? "Select a date and time for your call"
              : stepName === 5
              ? "Provide your contact details"
              : stepName === 6
              ? "Thank you! Your call is booked."
              : ""
            }
          </p>
          {
            // step-1
            stepName === 1 && (
              <div>
                <div className="h-[390px]">
                  {BookingTypeData.map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`${
                          bookingType === item.label
                            ? "text-sand bg-bloom"
                            : "text-bloom"
                        } mb-6 border border-bloom cursor-pointer flex items-center justify-center font-roboto gap-2.5 p-[21px] font-semibold text-lg hover:bg-bloom hover:text-sand`}
                        onClick={() => handleClick(item.label)}
                      >
                        {item.icon} {item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          }
          {
            // step-2
            stepName === 2 && (
              <div>
                <div>
                  <Tabs className="h-[390px]">
                    <div className="bg-[#b3a7c7] max-w-[278px] mx-auto rounded-[9px] p-0.5">
                      <TabList className="flex text-center justify-center">
                        <Tab className="rounded-[7px] font-roboto leading-5 font-semibold text-[15px] py-1.5 text-white active:bg-white active:text-black w-[137px] text-center">
                          Canada
                        </Tab>
                        <Tab className="rounded-[7px] font-roboto leading-5 font-semibold text-[15px] py-1.5 text-white active:bg-white active:text-black w-[137px] text-center">
                          US
                        </Tab>
                      </TabList>
                    </div>
                    <div className="max-w-[302px] mx-auto mt-6">
                      <TabPanel>
                        {CanadaLocation.map((item, idx) => {
                          return (
                            <>
                              <div
                                key={idx}
                                className={`${
                                  locationType === item.label
                                    ? "text-sand bg-bloom"
                                    : "text-bloom"
                                } text-center mb-[11px] border border-bloom cursor-pointer font-gt p-[13px] font-semibold text-lg hover:bg-bloom hover:text-sand`}
                                style={{ lineHeight: "20px" }}
                                onClick={() => locationClick(item.label)}
                              >
                                {item.label}
                              </div>
                            </>
                          );
                        })}
                      </TabPanel>
                      <TabPanel>
                        {USLocation.map((item, idx) => {
                          return (
                            <>
                              <div
                                key={idx}
                                className={`${
                                  locationType === item.label
                                    ? "text-sand bg-bloom"
                                    : "text-bloom"
                                } text-center mb-[11px] border border-bloom cursor-pointer font-gt p-[13px] font-semibold text-lg hover:bg-bloom hover:text-sand`}
                                style={{ lineHeight: "20px" }}
                                onClick={() => locationClick(item.label)}
                              >
                                {item.label}
                              </div>
                            </>
                          );
                        })}
                      </TabPanel>
                    </div>
                  </Tabs>
                </div>
              </div>
            )
          }
          {
            // step-3
            stepName === 3 && (
              <div>
                <div className="max-w-[302px] mx-auto mt-6 h-[390px]">
                  {ServiceBooking.map((item, idx) => {
                    return (
                      <>
                        <div
                          key={idx}
                          className={`${
                            serviceType === item.label
                              ? "text-sand bg-bloom"
                              : "text-bloom"
                          } text-center mb-[11px] border border-bloom cursor-pointer font-gt p-[13px] font-semibold text-lg hover:bg-bloom hover:text-sand`}
                          style={{ lineHeight: "20px" }}
                          onClick={() => serviceClick(item.label)}
                        >
                          {item.label}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )
          }
          {
            // step-4
            stepName === 4 && (
              <section id="step_4">
                <div className="flex items-start gap-10 mt-8 h-[390px]">
                  <div className="w-1/2">
                    <h5 className="flex gap-2 items-center mb-5">
                      <MdDateRange fontSize="22" />
                      <p className="uppercase font-bold">Date</p>
                    </h5>
                    <Calendar
                      onChange={onChange}
                      minDate={minDate}
                      value={value}
                    />
                  </div>
                  <div className="w-1/2">
                    <h5 className="flex gap-2 items-center mb-5">
                      <BiTime fontSize="20" />
                      <p className="uppercase font-bold">Time</p>
                    </h5>
                    <div>
                      <div
                        className={`${
                          timeSlot?.slots?.length > 0
                            ? "grid grid-cols-3 gap-3"
                            : "block uppercase"
                        }`}
                      >
                        {console.log("timeSlot", timeSlot)}
                        {timeSlot?.slots?.length > 0
                          ? timeSlot?.slots?.map((itm, idx) => {
                              console.log("itm", itm);
                              return (
                                <div
                                  key={idx}
                                  className={`${
                                    slotSelect === itm.slot
                                      ? "bg-[#414b5f] text-white"
                                      : "text-[#414b5f]"
                                  } cursor-pointer p-2 border rounded text-center border-grey40`}
                                  onClick={() => handleSelect(itm.slot)}
                                >
                                  {itm.slot}
                                </div>
                              );
                            })
                          : "No slots available for booking."}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )
          }
          {
            // step-5
            stepName === 5 && (
              <div>
                <div className="max-w-[338px] h-[390px] mx-auto">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="text-base border-b border-light max-w-[338px] min-w-[338px] h-[34px] mt-6 mb-1 font-roboto text-charcoal focus:outline-none"
                    onChange={(e) => handleChange("firstname", e.target.value)}
                    name="firstname"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="text-base border-b border-light max-w-[338px] min-w-[338px] h-[34px] mt-6 mb-1 font-roboto text-charcoal focus:outline-none"
                    onChange={(e) => handleChange("lastname", e.target.value)}
                    name="lastname"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="text-base border-b border-light max-w-[338px] min-w-[338px] h-[34px] mt-6 mb-1 font-roboto text-charcoal focus:outline-none"
                    onChange={(e) => handleChange("phone", e.target.value)}
                    name="phone"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-base border-b border-light max-w-[338px] min-w-[338px] h-[34px] mt-6 mb-1 font-roboto text-charcoal focus:outline-none"
                    onChange={(e) => handleChange("email", e.target.value)}
                    name="email"
                  />
                  <div class="main-div">
                    <label className="mt-2 pt-2 flex items-center gap-3">
                      <input
                        className="w-[22px] h-[22px] appearance-none border-[3px] border-white outline-grey40 outline outline-1 bg-white checked:bg-[#a6a6a6]"
                        type="checkbox"
                      />
                      <p className="text-sm text-grey80 font-roboto">
                        I want to stay up to date with Numinus news
                      </p>
                    </label>
                    <label className="mt-2 pt-2 flex items-center gap-3">
                      <input
                        className="w-[22px] h-[22px] appearance-none border-[3px] border-white outline-grey40 outline outline-1 bg-white checked:bg-[#a6a6a6]"
                        type="checkbox"
                      />
                      <p className="text-sm text-grey80 font-roboto">
                        I accept the{" "}
                        <Link href="/" target="_blank">
                          Terms &amp; Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/" target="_blank">
                          Data Policy
                        </Link>
                        .
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            )
          }
          {
            // step-6
            stepName === 6 && (
              <div>
                <p className="text-center max-w-[312px] mx-auto mb-5">
                  One of our team members will call you during your scheduled
                  time slot.
                </p>
                <div className="h-[460px] max-w-[275px] mx-auto">
                  <div>
                    <h4 className="text-xl mt-9 mb-5 text-center font-roboto">
                      Booking Details
                    </h4>
                    <ul className="p-[2px] pb-1 mb-5 border-b border-mediumgray">
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Name</strong>
                        <span id="full_name">
                          {input.firstname} {input.lastname}
                        </span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Phone</strong>
                        <span id="phone_number">{input.phone}</span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Email</strong>
                        <span id="email_address">{input.email}</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Topic</strong>
                        <span id="topic">{bookingType}</span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Location</strong>
                        <span id="location_name">{locationType}</span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Service</strong>
                        <span id="service_name">{serviceType}</span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Date</strong>
                        <span id="booking_modal_date">{appointedData}</span>
                      </li>
                      <li className="text-sm mb-4 flex gap-[2%] font-roboto">
                        <strong className="w-[65px]">Time</strong>
                        <span id="booking_modal_time">{slotSelect}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
          }
          <div
            className={`h-[70px] text-center p-[11px] flex items-center ${
              stepName !== 1 && stepName !== 6
                ? "justify-between"
                : "justify-center"
            }`}
          >
            {stepName !== 1 && stepName !== 6 && (
              <button
                className="border-sunstone text-sunstone border text-center font-semibold py-3 px-6"
                onClick={prevStep}
              >
                Back
              </button>
            )}
            <button
              className="bg-sunstone text-white text-center font-semibold py-3 px-6"
              onClick={handleSubmit}
            >
              {stepName < 5
                ? "Next"
                : stepName === 5
                ? "Book a Call"
                : stepName === 6
                ? "Done"
                : ""}
            </button>
          </div>
          {stepName !== 5 && stepName !== 6 && (
            <div className="border-t border-mediumgray pt-8 text-center">
              <p
                className="font-nuckle text-xl mb-2"
                style={{ letterSpacing: "0.01em" }}
              >
                Call us now toll free
              </p>
              <Link
                href="#"
                className="text-base font-gt underline leading-4"
                style={{ letterSpacing: "1px" }}
              >
                1-833-NUMINUS (686-4687)
              </Link>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
