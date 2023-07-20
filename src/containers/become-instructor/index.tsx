import InstructorForm from "@components/forms/mentor-form";

const BecomeInstructor = () => {
    return (
        <div className="tw-py-15 md:tw-py-20 lg:tw-py-[100px] tw-bg-[url('/images/bg/become-a-teache-bg.jpg')] tw-bg-cover tw-bg-fixed">
            <div className="tw-container">
                <div className="tw-flex tw-justify-center">
                    <InstructorForm className="lg:tw-w-2/3 xl:tw-w-1/2 lg:tw-ml-auto" />
                </div>
            </div>
        </div>
    );
};

export default BecomeInstructor;
