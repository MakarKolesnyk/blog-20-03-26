import { useFormik } from "formik";
import { mdiMagnify } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      q: "",
    },
    onSubmit: (values) => {
      const trimQ = values.q.trim();
      navigate(`/posts/search?q=${trimQ}`);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="search"
        name="q"
        placeholder="search posts..."
        value={formik.values.q}
        onChange={formik.handleChange}
      />
      <button type="submit">
        <svg viewBox="0 0 24 24" width={13} height={13}>
          <path d={mdiMagnify} />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
