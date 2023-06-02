import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubreposById } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const ProfileGithub = ({ username, getGithubreposById, repos }) => {
  useEffect(() => {
    getGithubreposById(username);
  }, [getGithubreposById]);
  return (
    <div className='profile-github'>
      <h2 className='text-primary my-1'>Github Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo) => (
          <div key={repo._id} className='repo pg-white p-1 my-1'>
            <div>
              <h4>
                <a
                  href={repo.html_url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <li className='badge badge-primary'>
                  Stars: {repo.stargazers_count}
                </li>
                <li className='badge badge-dark'>
                  Watchers: {repo.wathcers_count}
                </li>
                <li className='badge badge-dark'>Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubreposById: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubreposById })(ProfileGithub);
