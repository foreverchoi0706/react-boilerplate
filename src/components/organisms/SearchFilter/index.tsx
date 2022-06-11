import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GENDERS } from "constants/options";
import Input from "components/atoms/Input";

const SearchFilter: FC = memo(() => {
  const navigate = useNavigate();

  const [genderOptions, setGenderOptions] = useState<Map<number, string>>(
    new Map()
  );

  const handleChange = useCallback((key: number, value: string) => {
    setGenderOptions((preState) => {
      if (preState.has(key)) {
        preState.delete(key);
        return new Map(preState);
      }
      return new Map(key === 0 ? null : preState.set(key, value));
    });
  }, []);

  useEffect(() => {
    let searchParam = "";
    genderOptions.forEach((value, key) => (searchParam += `${key}=${value}&`));
    navigate(`/?${searchParam}`);
  }, [genderOptions, navigate]);

  return (
    <div>
      {GENDERS.map(
        (GENDER) =>
          GENDER.key !== 0 && (
            <label key={GENDER.key}>
              <Input
                type="checkbox"
                name={GENDER.value}
                value={GENDER.key}
                onChange={() => handleChange(GENDER.key, GENDER.value)}
                checked={genderOptions.has(GENDER.key)}
              />
              {GENDER.value}
            </label>
          )
      )}
    </div>
  );
});

export default SearchFilter;
