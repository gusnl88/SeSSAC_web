import { useForm } from "react-hook-form";

export default function Preactice1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("valid",data);
  };

  const oninValid = (data) => {
    console.log("invalid", data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onValid, oninValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register("name", {
            required: "이름을 입력 하세요",
            minLength: {
              value: 2,
              message: "이름은 최소 두글자 이상 작성해주세요.",
            },
          })}
        />
        <span style={{color:"red"}}>{errors.name?.message}</span>
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register("age", {
            required: "나이를 입력해 주세요",
            validate: {
              ageValue: (value) => {
                return value > 0 || "0이상의 숫자만 입력 가능합니다";
              },
            },
          })}
        />
        <span style={{color:"red"}}>{errors.age?.message}</span>
        <br />
        <button>제출</button>
      </form>
    </>
  );
}
