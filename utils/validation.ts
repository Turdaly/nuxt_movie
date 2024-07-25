export const regex = {
  title: /^[\u0400-\u04FFa-zA-Z]+[ \-a-zA-Z0-9]*$/,
  year: /^(18[8-9]\d|19\d{2}|20[0-2]\d|2030)$/,
  duration: /^1\d{0,2}$/,
};

export const rules = {
  required: (v: any) => !!v || "Заполните поле",
  requiredArray: (v: any[]) => v.length > 0 || "Выберите хотя бы один жанр",
  title: (v: any) => regex.title.test(v) || "Неправильный формат",
  year: (v: any) => regex.year.test(v) || "Год должен быть от 1880 до 2030",
  duration: (v: any) => regex.duration.test(v) || "Неправильный формат",
};